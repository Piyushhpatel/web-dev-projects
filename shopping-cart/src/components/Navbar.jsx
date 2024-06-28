import React from "react"
import logo from "../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
          <img src={logo} width={130} className="ml-5"/>
      </NavLink>
      
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
            <p>Home</p>
        </NavLink>
        <div className="relative group">
          <NavLink to="/cart">
              <FaShoppingCart className="text-2xl" />
          </NavLink>
          {
            cart.length !== 0 &&
            <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animation-bounce rounded-full text-white">
              <p  >{cart.length}</p>
            </div>
          }
          
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
