import React from 'react'
import Navbar from './include/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar/>
      <div className="relative  min-h-screen flex items-center">
  <div className="container mx-auto flex flex-wrap items-center px-6 lg:px-20">
    <div className="w-full lg:w-1/2 text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">
          Manage Roles and Permissions
        </span>
        <br />
        Seamlessly and Efficiently
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Simplify user management.
      </p>
      <div>
        <Link to="/admin/dashboard" className="bg-gradient-to-r from-blue-700 to-violet-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
          Get Started
        </Link>
      </div>
    </div>
    <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
    <img
        src="/image/bghero.jpg"
        alt="Teamwork illustration"
        className="rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>


    </>
  )
}

export default Home
