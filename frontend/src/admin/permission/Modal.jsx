import React from "react";

function Modal({
  permissionName,
  setPermissionName,
  permissionDescription,
  setPermissionDescription,
  handleAddPermission,
  handleEditPermission,
  editPermission,
  closeModal,
}) {
  return (
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
  );
}

export default Modal;
