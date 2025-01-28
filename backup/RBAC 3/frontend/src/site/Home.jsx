import React from 'react'
import Navbar from './include/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto flex flex-wrap items-center px-6 lg:px-20">
          <div className="w-full lg:w-1/2 my-5 text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">
                Manage Roles and Permissions
              </span>
              <br />
              Seamlessly and Efficiently
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Simplify user management.
            </p>
            <div>
              <Link to="/admin/dashboard" className="bg-gradient-to-r from-blue-700 to-violet-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0 order-1 lg:order-2">
            <img
              src="/image/bghero.jpg"
              alt="Teamwork illustration"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
