import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Compras from "./components/Pages/Compras/Compras";
import Infos from "./components/Pages/Infos/Infos";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Pagamento from "./components/Pagamento/Pagamento";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
