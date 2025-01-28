import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Permission({page}) {
  const [permission, setPermission] = useState([]);

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
    </Layout>
  );
}

export default Permission;
