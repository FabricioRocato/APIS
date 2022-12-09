import React, { useEffect, useState } from "react";
import { api } from "../api";

// import { Container } from './styles';

const Employees: React.FC = () => {
  const [employee, setEmployee] = useState([
    {
      firstName: "",
      occupation: "",
      cpf: "",
      cellphone: "",
      id: 0,
    },
  ]);
  const [showList, setShowList] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [employeeInfo, setEmployeeInfo] = useState({
    firstName: "",
    occupation: "",
    cpf: "",
    cellphone: "",
    id: 0,
  });

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    setEmployee([]);
    await api.get(`/employees`).then((res) => {
      setEmployee(res.data);
    });
  };

  const deleteEmployee = (id: number) => {
    api.delete(`/employees/${id}`).then(() => {
      getEmployee();
    });
  };

  const editEmployee = (
    firstName: string,
    cpf: string,
    occupation: string,
    cellphone: string,
    id: number
  ) => {
    setIsEdit(true);
    setEmployeeInfo({
      firstName: firstName,
      cpf: cpf,
      cellphone: cellphone,
      occupation: occupation,
      id: id,
    });
    setShowCreate(true);
    setShowList(false);
  };

  const saveEmployee = () => {
    if (isEdit) {
      api.put(`/employees`, employeeInfo).then(() => {
        getEmployee();
      });
    } else {
      api.post(`/employees`, employeeInfo).then(() => {
        getEmployee();
      });
    }
    setIsEdit(false);
    setShowList(true);
    setShowCreate(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-24 py-16 flex-col">
      <span className="my-4 text-xl font-semibold">Funcionários</span>
      <div className="w-full h-full bg-gray-100 border-2 border-gray-200 rounded-lg shadow-md relative">
        <div className="m-4">
          <button
            className={`${
              showList && !showCreate
                ? "bg-brand-300 text-gray-50 "
                : "text-brand-300"
            } transition-colors ease-linear duration-200 border-2 rounded-lg border-brand-300  font-bold px-2 py-1 mr-4`}
            onClick={() => {
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
              setShowList(false);
              setShowCreate(true);
            }}
          >
            Cadastro
          </button>
        </div>
        {showList && (
          <div className="w-full bg-gray-50 overflow-auto flex flex-col items-center px-6 h-[650px]">
            {employee.map((e) => {
              return (
                <div className="flex items-center justify-between border-b border-brand-400 w-full pb-2 my-2 px-4 py-2">
                  <div className="w-full flex">
                    <span className="w-60 mr-4 truncate">{e.firstName}</span>
                    <span className="w-60 mr-4 truncate">{e.cpf}</span>
                    <span className="w-60 mr-4 truncate">{e.cellphone}</span>
                    <span className="w-60 mr-4 truncate">{e.occupation}</span>
                  </div>
                  <div className="flex w-full justify-end items-center">
                    <button
                      onClick={() =>
                        editEmployee(
                          e.firstName,
                          e.cpf,
                          e.cellphone,
                          e.occupation,
                          e.id
                        )
                      }
                      className="border-2 hover:bg-gray-200 border-brand-400 rounded-lg px-2 py-1 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteEmployee(e.id)}
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
                value={employeeInfo.firstName}
                onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    firstName: e.target.value,
                  })
                }
                type="text"
                placeholder="Nome do funcionário"
                className="bg-gray-200 border-4 rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col my-4">
              <span className="text-xl fon-bold mb-2">Cpf</span>
              <input
                value={employeeInfo.cpf}
                onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    cpf: e.target.value,
                  })
                }
                type="text"
                placeholder="Cpf do funcionário"
                className="bg-gray-200 border-4  rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col my-4">
              <span className="text-xl fon-bold mb-2">Telefone</span>
              <input
                value={employeeInfo.cellphone}
                onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    cellphone: e.target.value,
                  })
                }
                type="text"
                placeholder="Telefone do funcionário"
                className="bg-gray-200 border-4  rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col my-4">
              <span className="text-xl fon-bold mb-2">Função</span>
              <input
                value={employeeInfo.occupation}
                onChange={(e) =>
                  setEmployeeInfo({
                    ...employeeInfo,
                    occupation: e.target.value,
                  })
                }
                type="text"
                placeholder="Funcção do funcionário"
                className="bg-gray-200 border-4  rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              <button
                onClick={() => {
                  saveEmployee();
                }}
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

export default Employees;
