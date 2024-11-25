import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function AllUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users");
      setUsers(res.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };
  const handleDeleteUser=async (id)=>{
    // console.log(id)
    try {
      const res=await axios.delete(`http://localhost:3000/users/${id}`)
      getAllUsers()
      toast.success("User Deleted")
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          All <span className="text-blue-700">USERS</span>
        </h1>
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">Manage all registered users here.</p>
          <Link to="/admin/adduser">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-200">Add User</button>
            </Link>
        </div>
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
                      Name
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Email
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Role
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-gray-600">
                      Status
                    </th>
                    <th className="text-center px-4 py-2 font-medium text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((data, i) => (
                      <tr
                        key={data.id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="px-4 py-2 border-b text-gray-700">
                          {i + 1}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {data.name}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {data.email}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          {data.role}
                        </td>
                        <td className="px-4 py-2 border-b text-gray-700">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm ${
                              data.status === "Active"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {data.status}
                          </span>
                        </td>
                        <td className="px-4 py-2 border-b text-center">
                          <div className="flex items-center justify-center gap-3">
                            <Link to={`/admin/viewuser/${data.id}`}>
                            <button
                              title="View"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              
                              <FaEye className="text-lg" />
                            </button>
                            </Link>
                            <Link to={`/admin/edituser/${data.id}`}>
                            <button
                              title="Edit"
                              className="text-green-500 hover:text-green-600"
                            >
                              <FaEdit className="text-lg" />
                            </button>
                            </Link>
                            <button
                              title="Delete"
                              className="text-red-500 hover:text-red-600"
                              onClick={()=>{handleDeleteUser(data.id)}}
                            >
                              <MdDelete className="text-lg" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllUsers;
