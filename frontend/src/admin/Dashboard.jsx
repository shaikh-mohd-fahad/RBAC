import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout/Layout';

function Dashboard({page}) {
  const [stats, setStats] = useState({});
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get('https://rbac-kappa-one.vercel.app/api/db/stats');
        const permissionsRes = await axios.get('https://rbac-kappa-one.vercel.app/api/db/permission');
        // console.log(statsRes)
        // console.log(permissionsRes)
        setStats(statsRes.data);
        setPermissions(permissionsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout page={page}>
      {/* bg-gradient-to-r from-gray-100 to-blue-100 */}
    <div className="min-h-screen  py-8 px-6">
      <div className="container mx-auto">
        
      <h1 className="text-3xl font-extrabold text-center mb-12">
  Admin <span className="bg-gradient-to-r from-blue-700 to-violet-600 bg-clip-text text-transparent">
    DASHBOARD</span></h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-lg font-medium mb-2">Total Users</h2>
            <p className="text-5xl font-extrabold">{stats.totalUsers || 0}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-lg font-medium mb-2">Active Users</h2>
            <p className="text-5xl font-extrabold">{stats.activeUsers || 0}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-lg font-medium mb-2">Admin Users</h2>
            <p className="text-5xl font-extrabold">{stats.adminUsers || 0}</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-lg font-medium mb-2">Total Roles</h2>
            <p className="text-5xl font-extrabold">{stats.totalRoles || 0}</p>
          </div>
        </div>

        {/* Permissions Table */}
        <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Permissions List
          </h2>
          <table className="w-full table-auto border-collapse overflow-hidden rounded-xl shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <th className="px-4 py-3 text-left font-medium">Permission</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {permissions.map((perm, index) => (
                <tr
                  key={perm.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3 border-b">{perm.permission}</td>
                  <td className="px-4 py-3 border-b">{perm.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Dashboard;
