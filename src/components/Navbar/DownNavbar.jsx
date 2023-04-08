import React from "react";
import { Link } from "react-router-dom";

const DownNavbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/booked'>Booking</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Products
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to="/Products/Ring">Ring</Link>
                </li>
                <li>
                  <Link to="/Products/Necklace">Necklace</Link>
                </li>
                <li>
                  <Link to="/Products/Earings">Earings</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      <div className="hidden lg:flex mx-auto mt-5 text-gray-500">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="hover:text-gray-400 bg-transparent mr-10" to="/home">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 bg-transparent mr-10" to="/booked">Booking</Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 bg-transparent mr-10" to="/about">About Us</Link>
          </li>
          <li tabIndex={0}>
            <a className="hover:text-gray-400 bg-transparent mr-8">
              Products
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <Link className="hover:text-gray-400 bg-transparent" to="/Products/Ring">Ring</Link>
              </li>
              <li>
                <Link className="hover:text-gray-400 bg-transparent" to="/Products/Necklace">Necklace</Link>
              </li>
              <li>
                <Link className="hover:text-gray-400 bg-transparent" to="/Products/Earings">Earings</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="hover:text-gray-400 bg-transparent" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DownNavbar;
