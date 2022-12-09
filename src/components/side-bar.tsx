import React from "react";

interface Props {
  setShowClients: (value: boolean) => void;
  setShowEmployee: (value: boolean) => void;
  setShowProducts: (value: boolean) => void;
}

const SideBar: React.FC<Props> = ({
  setShowProducts,
  setShowEmployee,
  setShowClients,
}) => {
  return (
    <div className="w-96 h-full flex flex-col bg-gray-200">
      <div className="w-full h-auto py-12 flex items-center justify-center">
        <span
          onClick={() => {
            setShowClients(false);
            setShowEmployee(false);
            setShowProducts(false);
          }}
          className="text-2xl text-brand-400 border-2 border-brand-400 rounded-lg px-2 py-1 font-semibold"
        >
          <span className="text-red-500 font-bold text-4xl">Beer</span>Stop
        </span>
      </div>
      <div className="w-full px-2 rounded-lg">
        <button
          className={`border rounded-lg border-brand-400 w-full flex items-center justify-center hover:bg-gray-100 h-12 text-lg font-semibold my-3 transition-colors ease-linear duration-200`}
          onClick={() => {
            setShowClients(false);
            setShowEmployee(false);
            setShowProducts(true);
          }}
        >
          Produtos
        </button>
        <button
          className="border rounded-lg border-brand-400 w-full flex items-center justify-center hover:bg-gray-50 h-12 text-lg font-semibold my-3 transition-colors ease-linear duration-200"
          onClick={() => {
            setShowClients(false);
            setShowEmployee(true);
            setShowProducts(false);
          }}
        >
          Funcionários
        </button>
        <button
          className="border rounded-lg border-brand-400  w-full flex items-center justify-center hover:bg-gray-100 h-12 text-lg font-semibold my-3 transition-colors ease-linear duration-200"
          onClick={() => {
            setShowClients(true);
            setShowEmployee(false);
            setShowProducts(false);
          }}
        >
          Clientes
        </button>
      </div>
    </div>
  );
};

export default SideBar;
