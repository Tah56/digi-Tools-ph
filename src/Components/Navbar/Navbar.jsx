import {  ShoppingCartIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-11/12 w-full mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
            
                
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 cursor-pointer">
            <li>
              Products
            </li>
            <li>
                Features
            </li>
            <li>
              Pricing
            </li>
            <li>
                Testimonials
            </li>
            <li>
                FAQ
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-5">

            <div className="relative">
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className="absolute -top-3 left-1/2 font-bold text-red-400"></span>
            </div>
            <button className="btn btn-ghost"> Login</button>
          <a className="btn rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-semibold ">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
