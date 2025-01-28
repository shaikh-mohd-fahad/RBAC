import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdGroup, MdSecurity, MdLock } from "react-icons/md";

function Sidebar({currentPage}) {
  return (
    <div className="drawer lg:drawer-open bg-gray-50 h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* style={{ height: "calc(100vh - 60px)" }} */}
      <div className="drawer-side" >
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {/* style={{ height: "calc(100vh - 60px)" }} */}
        <ul
          className="menu p-4 w-64 bg-gray-50 text-gray-800 h-full">
          <li className="mb-2">
            <Link to="/admin/dashboard" className={`flex items-center gap-3 ${currentPage==="dashboard"?"bg-gray-200":''}`}>
              <MdDashboard className="text-gray-500 text-lg" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/allusers" className={`flex items-center gap-3 ${currentPage==="user"?"bg-gray-200":''}`}>
              <MdGroup className="text-gray-500 text-lg" />
              <span className="text-sm">All Users</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/role" className={`flex items-center gap-3 ${currentPage==="role"?"bg-gray-200":''}`}>
              <MdSecurity className="text-gray-500 text-lg" />
              <span className="text-sm">Roles</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/permission"  className={`flex items-center gap-3 ${currentPage==="permission"?"bg-gray-200":''}`}>
              <MdLock className="text-gray-500 text-lg" />
              <span className="text-sm">Permissions</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
