import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function EditRole() {
  const { id } = useParams();
  // console.log("id",id)
  const navigate = useNavigate();

  const [input, setInput] = useState({
    role: '',
    permissions: [],
    status: 'Active',
  });

  const [errors, setErrors] = useState({});
  const permissionsList = ['Read', 'Write', 'Update', 'Delete']; // Permission options

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/roles/${id}`);
        setInput({
          role: res.data.role || '',
          permissions: res.data.permissions || [],
          status: res.data.status || 'Active',
        });
      } catch (error) {
        console.error('Error fetching role data:', error);
      }
    };
    fetchRoleData();
  }, [id]);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedPermissions = checked
        ? [...input.permissions, value]
        : input.permissions.filter((perm) => perm !== value);
      setInput({ ...input, permissions: updatedPermissions });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!input.role.trim()) formErrors.role = 'Role is required';
    if (input.permissions.length === 0)
      formErrors.permissions = 'At least one permission is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.put(
        `http://localhost:3000/roles/${id}`,{ ...input },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('Role updated successfully');
      // navigate('/roles');
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Edit <span className="text-green-600">ROLE</span>
        </h1>
        <div className="flex flex-row">
          <div className="basis-1/4"></div>
          <div className="basis-1/2">
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
              <form onSubmit={handleFormSubmit} method="post">
                <div className="mb-4">
                  <label htmlFor="role" className="block text-gray-600 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder="Enter role"
                    name="role"
                    value={input.role}
                    onChange={handleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-1">Permissions</label>
                  {permissionsList.map((permission) => (
                    <div key={permission} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={permission}
                        name="permissions"
                        value={permission}
                        checked={input.permissions.includes(permission)}
                        onChange={handleInput}
                        className="mr-2"
                      />
                      <label htmlFor={permission} className="text-gray-700">
                        {permission}
                      </label>
                    </div>
                  ))}
                  {errors.permissions && (
                    <p className="text-red-500 text-sm">{errors.permissions}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="status" className="block text-gray-600 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={input.status}
                    onChange={handleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Update Role
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditRole;
