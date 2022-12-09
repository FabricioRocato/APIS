import { useState } from "react";
import Clients from "./components/clients";
import Employees from "./components/employees";
import Products from "./components/products";
import SideBar from "./components/side-bar";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showClients, setShowClients] = useState(false);
  return (
    <div className="h-screen w-screen bg-gray-50 overflow-hidden flex">
      <SideBar
        setShowProducts={setShowProducts}
        setShowEmployee={setShowEmployee}
        setShowClients={setShowClients}
      />
      <div className="flex flex-1 bg-gray-50 h-full w-full">
        {showProducts && <Products />}
        {showEmployee && <Employees />}
        {showClients && <Clients />}
        {!showProducts && !showEmployee && !showClients && (
          <div className="w-full h-auto py-12 flex flex-col items-center justify-center">
            <span className="text-2xl text-brand-400 border-2 border-brand-400 rounded-lg px-2 py-1 font-semibold">
              <span className="text-red-500 font-bold text-4xl">Beer</span>Stop
            </span>
            <span className="mt-12 text-4xl ">
              Sistema de controle de caixa e comandas
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
