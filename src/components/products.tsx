import React, { useEffect, useState } from "react";
import { api } from "../api";

// import { Container } from './styles';

const Products: React.FC = () => {
  const [products, setProducts] = useState([
    {
      name: "",
      quantity: 0,
      price: "",
      id: 0,
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState<number>(0);
  const [showList, setShowList] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [productInfo, setProductInfo] = useState({
    name: "",
    quantity: 0,
    price: "",
    id: 0,
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setProducts([]);
    await api.get(`/products`).then((res) => {
      setProducts(res.data);
    });
  };

  const deleteProducts = (id: number) => {
    api.delete(`/products/${id}`).then(() => {
      getProducts();
    });
  };

  const editProducts = (
    name: string,
    quantity: number,
    price: string,
    id: number
  ) => {
    setIsEdit(true);
    setProductInfo({
      name: name,
      quantity: quantity,
      price: price,
      id: id,
    });
    setShowCreate(true);
    setShowList(false);
  };

  const saveProducts = () => {
    if (isEdit) {
      api.put(`/products`, productInfo).then(() => {
        getProducts();
      });
    } else {
      api.post(`/products`, productInfo).then(() => {
        getProducts();
      });
    }
    setIsEdit(false);
    setShowList(true);
    setShowCreate(false);
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-24 py-16 flex-col">
      <span className="my-4 text-xl font-semibold">Produtos</span>
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
          <div className="w-full bg-gray-50 overflow-auto flex flex-col items-center  px-6 h-[650px]">
            {products.map((p) => {
              return (
                <div className="flex items-center justify-between border-b border-brand-400 w-full pb-2 my-2 px-4 py-2">
                  <div className="w-full flex">
                    <span className="w-60 mr-4 truncate">{p.name}</span>
                    <span className="w-60 mr-4 truncate">{p.price}</span>
                    <span className="w-60 mr-4 truncate">{p.quantity}</span>
                  </div>
                  <div className="flex w-full justify-end items-center">
                    <button
                      onClick={() =>
                        editProducts(p.name, p.quantity, p.price, p.id)
                      }
                      className="border-2 hover:bg-gray-200 border-brand-400 rounded-lg px-2 py-1 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProducts(p.id)}
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
                value={productInfo.name}
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    name: e.target.value,
                  })
                }
                type="text"
                placeholder="Nome do produto"
                className="bg-gray-200 border-4 rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="flex items-center my-4">
              <span className="text-xl fon-bold mr-3">Valor</span>
              <input
                value={productInfo.price}
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    price: e.target.value,
                  })
                }
                type="number"
                className="bg-gray-200 border-4 w-20 rounded-lg p-2 outline-none"
              />
            </div>
            <div className="flex items-center my-4">
              <span className="text-xl fon-bold mr-3">Quantidade</span>
              <input
                type="number"
                value={value}
                onChange={(e) => {
                  setValue(Number(e.target.value));
                  setProductInfo({
                    ...productInfo,
                    quantity: value,
                  });
                }}
                className="bg-gray-200 border-4 w-20 rounded-lg p-2 outline-none"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              <button
                onClick={() => {
                  saveProducts();
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

export default Products;
