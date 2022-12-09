import React, { useEffect, useState } from "react";
import { api } from "../api";

// import { Container } from './styles';

const Clients: React.FC = () => {
  const [clients, setClients] = useState([
    {
      firstName: "",
      cellphone: "",
      id: 0,
    },
  ]);
  const [showList, setShowList] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    cellphone: "",
    id: 0,
  });

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    setClients([]);
    await api.get(`/clients`).then((res) => {
      setClients(res.data);
    });
  };

  const deleteClient = (id: number) => {
    api.delete(`/clients/${id}`).then(() => {
      getClient();
    });
  };

  const editClient = (name: string, phone: string, id: number) => {
    setIsEdit(true);
    setClientInfo({ id: id, firstName: name, cellphone: phone });
    setShowCreate(true);
    setShowList(false);
  };

  const saveClient = () => {
    if (isEdit) {
      api.put(`/clients`, clientInfo).then(() => {
        getClient();
      });
    } else {
      api.post(`/clients`, clientInfo).then(() => {
        getClient();
      });
    }
    setIsEdit(false);
    setShowList(true);
    setShowCreate(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-24 py-16 flex-col">
      <span className="my-4 text-xl font-semibold">Clientes</span>
      <div className="w-full h-full bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md relative">
        <div className="m-4">
          <button
            className={`${
              showList && !showCreate
                ? "bg-brand-300 text-gray-50 "
                : "text-brand-300"
            } transition-colors ease-linear duration-200 border-2 rounded-lg border-brand-300  font-bold px-2 py-1 mr-4`}
            onClick={() => {
              getClient();
              setShowList(true);
              setShowCreate(false);
            }}
          >
            Lista
          </button>
          <button
            className={`${
              showCreate && !showList
                ? "bg-brand-300 text-gray-50 "
                : "text-brand-300"
            } transition-colors ease-linear duration-200 border-2 rounded-lg border-brand-300 font-bold px-2 py-1`}
            onClick={() => {
              getClient();
              setShowList(false);
              setShowCreate(true);
            }}
          >
            Cadastro
          </button>
        </div>
        {showList && (
          <div className="w-full bg-gray-50 overflow-auto flex flex-col items-center px-6 h-[650px]">
            {clients?.map((c) => {
              return (
                <div
                  key={c.id}
                  className="flex items-center justify-between border-b border-brand-400 w-full pb-2 my-2 px-4 py-2"
                >
                  <div className="w-full flex">
                    <span className="w-60 mr-4 truncate">{c?.firstName}</span>
                    <span className="w-60 mr-4 truncate">{c?.cellphone}</span>
                  </div>
                  <div className="flex w-full justify-end items-center">
                    <button
                      onClick={() => editClient(c.firstName, c.cellphone, c.id)}
                      className="border-2 hover:bg-gray-200 border-brand-400 rounded-lg px-2 py-1 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteClient(c.id)}
                      className="border-2 hover:bg-gray-200 border-brand-400 rounded-lg px-2 py-1"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {showCreate && (
          <div className="w-full  overflow-auto flex flex-col px-6">
            <div className="flex flex-col my-4">
              <span className="text-xl fon-bold mb-2">Nome</span>
              <input
                value={clientInfo.firstName}
                onChange={(e) =>
                  setClientInfo({ ...clientInfo, firstName: e.target.value })
                }
                type="text"
                placeholder="Nome do cliente"
                className="bg-gray-200 border-4 rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col my-4">
              <span className="text-xl fon-bold mb-2">Telefone</span>
              <input
                value={clientInfo.cellphone}
                onChange={(e) =>
                  setClientInfo({ ...clientInfo, cellphone: e.target.value })
                }
                type="text"
                placeholder="Telefone do cliente"
                className="bg-gray-200 border-4  rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              <button
                onClick={() => saveClient()}
                className="bg-brand-300 text-gray-50 rounded-lg px-4 py-2 w-40"
              >
                {isEdit ? "Editar" : "Salvar"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
