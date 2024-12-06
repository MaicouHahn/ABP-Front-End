import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Compras from "./components/Pages/Compras/Compras";
import Infos from "./components/Pages/Infos/Infos";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";
=======
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d

import { Route, Routes } from "react-router-dom";

const App = () => {
<<<<<<< HEAD
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
        </Routes>
      </div>
      <Footer />
    </>
  );
};

=======
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

>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
export default App;
