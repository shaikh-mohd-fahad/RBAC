import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const navList = (
    <>
      <li>
      {/* <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label> */}
      </li>
    </>
  );
  return (
    <>
      {/* <header className="w-100"> */}
      <nav className="navbar bg-gray-50 h-[60px]">
  <div className="navbar-start">
    {/* Sidebar toggle button */}
    <label
      htmlFor="my-drawer-2"
      className="tn btn-ghost drawer-button lg:hidden p-3 rounded-md"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </label>
    <div className="dropdown">
      {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg> 
      </div> */}
       <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content ">
        {navList}
      </ul> 
    </div>
    <Link to="/" className="btn btn-ghost text-xl md:ml-10">RBAC</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
      {navList}
    </ul> */}
  </div>
  <div className="navbar-end md:mr-10">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Profile"
            src="/image/profile3.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
      {/* </header> */}
    </>
  );
}

export default Navbar;
