import React from "react";
import Navbar from "../include/Navbar";
import Footer from "../include/Footer";
import {Link} from "react-router-dom"
import Sidebar from "../include/Sidebar";
import toast, { Toaster } from 'react-hot-toast';
function Layout({ children }) {
  return (
    <>
    <Toaster/>
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
