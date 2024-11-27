import React from "react";
import Navbar from "../include/Navbar";
import Footer from "../include/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../include/Sidebar";
import toast, { Toaster } from 'react-hot-toast';

function Layout({ children }) {
  return (
    <>
      <Toaster />
      <Navbar />

      <main>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-[250px]">
            <Sidebar />
          </div>
          <div className="w-full lg:w-[calc(100%-250px)]">
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export default Layout;
