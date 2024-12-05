import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Compras from "./components/Pages/Compras/Compras";
import Infos from "./components/Pages/Infos/Infos";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Compras />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/home/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
