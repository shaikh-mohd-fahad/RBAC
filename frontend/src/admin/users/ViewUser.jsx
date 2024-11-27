import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function ViewUser() {
  const userId = useParams().id;
  const [userProfile, setUserProfile] = useState({});

  const getUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${userId}`);
      setUserProfile(res.data);
    } catch (error) {
      console.log('error', error);
      toast.error('Failed to load user data');
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          User <span className="text-blue-600">PROFILE</span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:w-1/3 mb-6 lg:mb-0">
            <img
              src="/image/profile1.jpg"
              alt="User Profile"
              className="rounded-full border-4 border-blue-500 w-32 h-32 sm:w-48 sm:h-48"
            />
          </div>
          {/* Profile Details Section */}
          <div className="lg:w-2/3 lg:ml-6 text-center lg:text-left">
            <div className="text-gray-700 space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="text-lg sm:text-xl font-semibold text-gray-800 sm:mr-2">
                  Name:
                </span>
                <span className="text-base sm:text-lg">{userProfile.name}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="text-lg sm:text-xl font-semibold text-gray-800 sm:mr-2">
                  Role:
                </span>
                <span className="text-base sm:text-lg">{userProfile.role}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <span className="text-lg sm:text-xl font-semibold text-gray-800 sm:mr-2">
                  Status:
                </span>
                <span
                  className={`text-base sm:text-lg ${
                    userProfile.status === 'Active' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {userProfile.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewUser;
