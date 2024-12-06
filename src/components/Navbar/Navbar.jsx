<<<<<<< HEAD
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Store/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCart } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </li>
        </Link>
=======
import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          baixe o app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contato
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
<<<<<<< HEAD
          <div className={getTotalCart() === 0 ? "" : "notify"}></div>
          <Link to="/Compras">
            <img src={assets.basket_icon} alt="" />
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>cadastre-se</button>
=======
          <div className="notify"></div>
          <img src={assets.basket_icon} alt="" />
        </div>
        <button>cadastre-se</button>
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
      </div>
    </div>
  );
};

export default Navbar;
