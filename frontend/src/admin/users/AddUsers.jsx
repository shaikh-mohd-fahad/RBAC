import React from 'react'
import Layout from '../layout/Layout'

function AddUsers() {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Add New Users
        </h1>
        <div className='flex flex-row'>
        <div className='basis-1/4'></div>
        <div className='basis-1/2'>
        <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
  <h1 class="text-2xl font-bold text-gray-700 mb-4 text-center">User Form</h1>
  <form>
    <div class="mb-4">
      <label for="name" class="block text-gray-600 mb-1">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter name"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-gray-600 mb-1">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>

    <div class="mb-4">
      <label for="role" class="block text-gray-600 mb-1">Role</label>
      <select
        id="role"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option disabled selected>Select a role</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="status" class="block text-gray-600 mb-1">Status</label>
      <select
        id="status"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        <option value="active">Active</option>
        <option value="disabled">Disabled</option>
      </select>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
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

export default AddUsers
