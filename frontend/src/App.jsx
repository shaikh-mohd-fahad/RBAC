import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './admin/Dashboard'
import Home from './site/Home';
import AllUsers from './admin/users/AllUsers';
import Role from './admin/role/Role';
import Permission from './admin/permission/Permission';
import AddUsers from './admin/users/AddUsers';
function App() {
  return (
    <>
      <Routes>
        {/* *****Site Route ******** */}
        <Route path='/' element={<Home/>}/>

        {/* *****Admin Route ******** */}
        <Route path="admin/dashboard" element={<Dashboard/>}/>

        <Route path="admin/allusers" element={<AllUsers/>}/>
        <Route path="admin/adduser" element={<AddUsers/>}/>

        <Route path="admin/role" element={<Role/>}/>
        <Route path="admin/permission" element={<Permission/>}/>
      </Routes>
    </>
  )
}

export default App
