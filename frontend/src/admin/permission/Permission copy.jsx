import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Permission({ page }) {
  const [permission, setPermission] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [editPermission, setEditPermission] = useState(null); 
  const [permissionName, setPermissionName] = useState(""); 
  const [permissionDescription, setPermissionDescription] = useState("");

  const getAllPermission = async () => {
    try {
      const res = await axios.get("http://localhost:3000/permission");
      setPermission(res.data);
      // console.log("res", res.data)
    } catch (error) {
      console.log("Error fetching permission:", error);
    }
  };

  // const handleDeleteRole=async (id)=>{
  //   console.log(id)
  //   try {
  //     const res=await axios.delete(`http://localhost:3000/roles/${id}`)
  //     getAllRoles()
  //     toast.success("Role Deleted")
  //   } catch (error) {
  //     console.log("error", error)
  //   }
  // }

  const openAddModal = () => {
    setIsModalOpen(true);
    setEditPermission(null); // Reset the editPermission for adding a new one
    setPermissionName("");
    setPermissionDescription("");
  };

  const openEditModal = (permission) => {
    setIsModalOpen(true);
    setEditPermission(permission); // Set the permission to be edited
    setPermissionName(permission.permission);
    setPermissionDescription(permission.description);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditPermission(null);
    setPermissionName("");
    setPermissionDescription("");
  };

  const handleAddPermission = async () => {
    try {
      const res = await axios.post("http://localhost:3000/permission", {
        permission: permissionName,
        description: permissionDescription,
      });
      getAllPermission();
      toast.success("Permission Added Successfully");
      closeModal();
    } catch (error) {
      console.log("Error adding permission:", error);
    }
  };

  const handleEditPermission = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3000/permission/${editPermission.id}`,
        {
          permission: permissionName,
          description: permissionDescription,
        }
      );
      getAllPermission();
      toast.success("Permission Updated Successfully");
      closeModal();
    } catch (error) {
      console.log("Error editing permission:", error);
    }
  };

  const handleDeletePermission = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/permission/${id}`);
      getAllPermission();
      toast.success("Permission Deleted Successfully");
    } catch (error) {
      console.log("Error deleting permission:", error);
    }
  };

  useEffect(() => {
    getAllPermission();
  }, []);

  return (
    <Layout page={page}>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          All <span className="text-cyan-500">PERMISSION</span>
        </h1>
        {/* <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Manage all registered permission here.</p>
          <Link to="/admin/addrole">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200">Add Role</button>
            </Link>
        </div> */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Sr No
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Permission
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Description
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {permission.length > 0 ? (
                    permission.map((data, i) => (
                      <tr
                        key={data.id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="px-4 py-2 border-b text-gray-700">
                          {i + 1}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {data.permission}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {data.description}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          <button
                            onClick={() => openEditModal(data)}
                            className="text-yellow-500 hover:text-yellow-700 mx-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeletePermission(data.id)}
                            className="text-red-500 hover:text-red-700 mx-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        No permission found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Add/Edit Permission */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-semibold mb-4">
              {editPermission ? "Edit Permission" : "Add Permission"}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Permission Name</label>
              <input
                type="text"
                value={permissionName}
                onChange={(e) => setPermissionName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Description</label>
              <input
                type="text"
                value={permissionDescription}
                onChange={(e) => setPermissionDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={editPermission ? handleEditPermission : handleAddPermission}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {editPermission ? "Save Changes" : "Add Permission"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Permission;
