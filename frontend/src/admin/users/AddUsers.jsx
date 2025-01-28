import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';

function AddUsers({page}) {
  const [input, setInput] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active'
  });
  const [allRole, setAllRole] = useState([]);

  const getAllRole = async () => {
    try {
      const res = await axios.get("https://rbac-kappa-one.vercel.app/api/db/roles");
      // console.log("res", res.data)
      setAllRole(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllRole();
  }, []);

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!input.name.trim()) formErrors.name = 'Name is required';
    if (!input.email.trim()) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(input.email)) formErrors.email = 'Invalid email format';
    if (!input.role) formErrors.role = 'Role is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post(
        'https://rbac-kappa-one.vercel.app/api/db/users',
        { ...input },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('New User Added');
      setInput({
        name: '',
        email: '',
        role: '',
        status: 'Active'
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Layout page={page}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
          Add <span className="text-blue-700">NEW USER</span>
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-full sm:max-w-md">
            <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <form onSubmit={handleFormSubmit} method="post">
                {/* Name input */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-1">
                    Name
                  </label>
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
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email input */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-1">
                    Email
                  </label>
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
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Role select */}
                <div className="mb-4">
                  <label htmlFor="role" className="block text-gray-600 mb-1">
                    Role {console.log("role ke paas", allRole)}
                  </label>
                  <select
                    id="role"
                    onChange={handleInput}
                    value={input.role}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    name="role"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {
                      allRole.length > 0 && allRole.map((data) => (
                        (<option value={data.role} className='' key={data.id}>{data.role.charAt(0).toUpperCase() + data.role.slice(1).toLowerCase()}</option>)
                      ))
                    }
                  </select>
                  {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                </div>

                {/* Status select */}
                <div className="mb-4">
                  <label htmlFor="status" className="block text-gray-600 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    onChange={handleInput}
                    value={input.status}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Add New User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddUsers;
