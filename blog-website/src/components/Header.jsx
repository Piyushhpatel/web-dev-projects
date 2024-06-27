import React from "react"
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <header className="text-center">
        <NavLink to="/">
          <h1 className="uppercase font-bold text-[1.875rem] leading-[2.25rem]">Strawhats Blogs</h1>
        </NavLink>
      </header>
    </div>
  )
};

export default Header;


