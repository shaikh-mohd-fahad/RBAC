import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';

function EditUser() {
    const [input,setInput]=useState({
        name:'',
        email:'',
        role:'',
        status:'Active'
      });
      const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput({
          ...input,
          [name]:value
      })
      }
      // useEffect(()=>{
      //   toast.success('Successfully toasted!')
      // },[])
      const handleFormSubmit=async(e)=>{
        e.preventDefault();
        console.log(input);
    
        try {
          const res=await axios.post('http://localhost:3000/users',
            { ...input
              // name:input.name,
              // email:input.email,
              // role:input.role,
              // status:input.status,
             },
            { headers: { "Content-Type": "application/json" } })
            toast.success('New User Added')
          console.log("res",res)
        } catch (error) {
          console.log("error", error)
        }
      }
      return (
        <Layout>
           
          <div className="container mx-auto p-6">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Edit <span className="text-blue-700">USER</span>
        </h1>
            <div className='flex flex-row'>
            <div className='basis-1/4'></div>
            <div className='basis-1/2'>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleFormSubmit} method="post">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            name="name"
            value={input.name}
            required
            onChange={handleInput}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
    
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInput}
            placeholder="Enter email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
    
        <div className="mb-4">
      <label htmlFor="role" className="block text-gray-600 mb-1">Role</label>
      <select
        id="role"
        onChange={handleInput}
        value={input.role}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        name="role"
      >
        <option value="" disabled>Select a role</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
    </div>
    
    
        <div className="mb-4">
      <label htmlFor="status" className="block text-gray-600 mb-1">Status</label>
      <select
        id="status"
        name="status"
        onChange={handleInput}
        value={input.status}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="active">Active</option>
        <option value="disabled">Disabled</option>
      </select>
    </div>
    
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
    
              </div>
            </div>
        </div>
        </Layout>
      )
}

export default EditUser
