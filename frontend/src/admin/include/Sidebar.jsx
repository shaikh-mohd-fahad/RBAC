import React from 'react'
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <>
      <div className="drawer lg:drawer-open">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Sidebar
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content  w-56 p-4"  style={{ height: "calc(100% - 60px)" }}>
                  {/* Sidebar content here */}
                  <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin/allusers">All Users</Link>
                  </li>
                  <li>
                    <Link to="/admin/role">Role</Link>
                  </li>
                  <li>
                    <Link to="/admin/permission">Permissions</Link>
                  </li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default Sidebar
