import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/images/logo.svg";
import User from "../assests/images/image-avatar.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Cart from "./Cart";
import "../styles/Home.css";
import { Auth } from "../Contexts/AuthContext";

const Nav = () => {
  // useContexts

  const { isAuth, handleAuth } = useContext(Auth);

  // usestate
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  // Fuction handlers
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleNav = () => {
    setShowNav(!showNav);
  };
  const handleShowLogOut = () => {
    setShowLogOut(!showLogOut);
  };

  return (
    <nav className="navbar">
      {/* Cart box  */}

      <div className="absolute top-24  mx-2  z-30 md:right-3">
        {showCart ? (
          <Cart showCart={showCart} setShowCart={setShowCart} />
        ) : null}
      </div>

      <div className="flex gap-4  z-40 items-center">
        <div className="md:hidden" onClick={handleNav}>
          <FaBars />
        </div>

        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div
          className={` ${
            showNav ? "" : "hidden"
          } md:flex absolute md:relative w-1/2 top-0 left-0 bg-white bottom-0 items-center `}
        >
          <ul className="  md:flex ml-5 md:ml-10">
            <li onClick={handleNav} className="md:hidden text-2xl pt-5 mb-10">
              <FaTimes />
            </li>
            <li className="navList  ">
              <Link to="/collections" className="navLink">
                Collections
                <span className=" inline-block bottom-3  bg-Orange md:-bottom-9 left-0  w-0  transition-all duration-700 group-hover:w-full h-1 absolute"></span>
              </Link>
            </li>
            <li className="navList">
              <Link to="/men" className="navLink">
                Men
                <span className="navLine group-hover:w-full"></span>
              </Link>
            </li>
            <li className="navList">
              <Link to="/Women" className="navLink">
                Women
                <span className="navLine group-hover:w-full "></span>
              </Link>
            </li>
            <li className="navList">
              <Link to="/about" className="navLink">
                About
                <span className="navLine group-hover:w-full"></span>
              </Link>
            </li>
            <li className="navList">
              <Link to="/contact" className="navLink">
                Contact
                <span className="navLine group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div
          className=" text-xl md:text-2xl align-middle relative cursor-pointer"
          onClick={handleShowCart}
        >
          <BsCart3 />
          <span className="absolute -top-1 -right-3 text-xs text-White bg-Orange px-2 py-0 rounded-full">
            3
          </span>
        </div>
        <div className="group cursor-pointer">
          {isAuth ? (
            <div className="relative">
              <img
                src={User}
                alt="Profile"
                className="w-10 h-10 rounded-full group-hover:border-Orange group-hover:border-2"
                onClick={handleShowLogOut}
              />
              <button
                className={` ${
                  showLogOut ? "block" : "hidden"
                } absolute -left-12 px-3 py-2  border-2  border-red-600`}
                onClick={handleAuth}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-Orange rounded-lg font-bold px-8 py-2 text-White hover:opacity-70">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
