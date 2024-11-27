import React from 'react'
import { Routes, Route, ServerRouter } from 'react-router-dom';
import Dashboard from './admin/Dashboard'

import AllUsers from './admin/users/AllUsers';
import Role from './admin/role/Role';
import Permission from './admin/permission/Permission';
import AddUsers from './admin/users/AddUsers';
import EditUser from './admin/users/EditUser';
import ViewUser from './admin/users/ViewUser';
import AddRole from './admin/role/AddRole';
import EditRole from './admin/role/EditRole';
import Home from './site/Home';
import Layout from './admin/layout/Layout';

// start json Server
// json-server --watch db.json --port 3000

function App() {
  return (
    <>
      <Routes>
        {/* *****Site Route ******** */}
        <Route path='/' element={<Home/>}/>

        {/* *****Admin Route ******** */}
        <Route path="admin/dashboard" element={<Dashboard page="dashboard"/>}/>

        <Route path="admin/allusers" element={<AllUsers  page="user"/>}/>
        <Route path="admin/adduser" element={<AddUsers  page="user"/>}/>
        <Route path="admin/edituser/:id" element={<EditUser  page="user"/>}/>
        <Route path="admin/viewuser/:id" element={<ViewUser  page="user"/>}/>

        <Route path="admin/role" element={<Role  page="role"/>}/>
        <Route path="admin/addrole" element={<AddRole  page="role"/>}/>
        <Route path="admin/editrole/:id" element={<EditRole  page="role"/>}/>


        <Route path="admin/permission" element={<Permission page="permission"/>}/>
      </Routes>
    </>
  )
}

export default App
