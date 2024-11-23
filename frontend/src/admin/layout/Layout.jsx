import React from "react";
import Navbar from "../include/Navbar";
import Footer from "../include/Footer";
import {Link} from "react-router-dom"
import Sidebar from "../include/Sidebar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-100 flex">
          <div className="sidebar">
            <Sidebar/>
          </div>
          <div className="w-[100%]">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
