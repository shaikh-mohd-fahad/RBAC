import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function EditRole({page}) {
  const { id } = useParams();
  // console.log("id",id)
  const navigate = useNavigate();

  const [input, setInput] = useState({
    role: '',
    permissions: [],
    status: 'Active',
  });

  const [errors, setErrors] = useState({});
  const [permissionsList, setPermissionsList] = useState([]);

  const getPermission = async () => {
    try {
      const res = await axios.get('http://localhost:3000/permission');
      setPermissionsList(res.data);
      // console.log("res", res.data)
      // console.log('permi', permissionsList);
      // toast.success("Role Deleted")
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPermission();
    // console.log("permi",permissionsList)
  }, []);

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
        `http://localhost:3000/roles/${id}`,
        { ...input },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('Role updated successfully');
      // navigate('/roles');
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <Layout page={page}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6">
            Edit <span className="text-green-600">ROLE</span>
          </h1>
          <form onSubmit={handleFormSubmit} method="post">
            {/* Role Field */}
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm sm:text-base text-gray-600 mb-1">
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
              {errors.role && <p className="text-red-500 text-xs sm:text-sm">{errors.role}</p>}
            </div>
  
            {/* Permissions */}
            <div className="mb-4">
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Permissions</label>
              {permissionsList.map((data) => (
                <div key={data.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={data.permission}
                    name="permissions"
                    value={data.permission}
                    checked={
                      data.permission === "Read"
                        ? true
                        : input.permissions.includes(data.permission)
                    }
                    disabled={data.permission === "Read"}
                    onChange={handleInput}
                    className="mr-2"
                  />
                  <label htmlFor={data.permission} className="text-gray-700 text-xs sm:text-sm">
                    {data.permission}
                  </label>
                </div>
              ))}
              {errors.permissions && (
                <p className="text-red-500 text-xs sm:text-sm">{errors.permissions}</p>
              )}
            </div>
  
            {/* Status */}
            <div className="mb-4">
              <label htmlFor="status" className="block text-sm sm:text-base text-gray-600 mb-1">
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
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition text-sm sm:text-base"
            >
              Update Role
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
  
  
}

export default EditRole;
