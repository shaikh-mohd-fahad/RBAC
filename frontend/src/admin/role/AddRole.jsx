import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';

function AddRole({page}) {
  const [input, setInput] = useState({
    role: '',
    permissions: [],
    status: 'Active',
  });

  const [errors, setErrors] = useState({});

  const [permissionsList, setPermissionsList] = useState([]);
  const getPermission = async () => {
    try {
      const res = await axios.get("http://localhost:3000/permission");
      setPermissionsList(res.data);
      // console.log("res", res.data)
      // console.log("permi", permissionsList);
      // toast.success("Role Deleted")
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getPermission();
    // console.log("permi",permissionsList)
  }, []);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle permissions
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
      await axios.post(
        'http://localhost:3000/roles',
        { ...input },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('Role added successfully');
      setInput({ role: '', permissions: [], status: 'Active' });
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  return (
    <Layout page={page}>
      <div className="container mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
          Add <span className="text-green-600">NEW ROLE</span>
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="basis-0 sm:basis-1/4"></div>
          <div className="w-full sm:basis-1/2">
            <div className="max-w-md mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
              <form onSubmit={handleFormSubmit} method="post">
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
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                  {errors.role && <p className="text-red-500 text-xs sm:text-sm">{errors.role}</p>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm sm:text-base text-gray-600 mb-1">Permissions</label>
                  {/* {console.log("per,",permissionsList)} */}
                  {permissionsList.map((data) => (
                    <div key={data.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={data.permission}
                        name="permissions"
                        value={data.permission}
                        onChange={handleInput}
                        className="mr-2"
                        checked={
                          data.permission === "Read" 
                            ? true 
                            : input.permissions.includes(data.permission)
                        }
                        disabled={data.permission === "Read"}
                      />
                      <label htmlFor={data.permission} className="text-sm sm:text-base text-gray-700">
                        {data.permission}
                      </label>
                    </div>
                  ))}
                  {errors.permissions && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors.permissions}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm sm:text-base text-gray-600 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={input.status}
                    onChange={handleInput}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option value="Active">Active</option>
                    <option value="Disabled">Disabled</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 text-sm sm:text-base rounded-md hover:bg-blue-600 transition"
                >
                  Add Role
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddRole;
