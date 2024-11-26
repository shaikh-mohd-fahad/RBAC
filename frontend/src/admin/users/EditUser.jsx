import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function EditUser() {
    const userId = useParams().id;
    // console.log("userId",userId)
    const [input, setInput] = useState({
        name: '',
        email: '',
        role: '',
        status: 'Active'
    });
    const [errors, setErrors] = useState({}); // Added state for validation errors

    //fetching user's data
    const getUserData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/users/' + userId)
            // console.log(res.data)
            setInput(res.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getUserData();
    }, [])
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }
    // useEffect(()=>{
    //   toast.success('Successfully toasted!')
    // },[])

    // *******Function to validate the form**
    const validate = () => {
        let tempErrors = {};
        if (!input.name.trim()) tempErrors.name = "Name is required.";
        if (!input.email.trim()) tempErrors.email = "Email is required.";
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) tempErrors.email = "Invalid email address.";
        if (!input.role) tempErrors.role = "Role is required.";
        if (!input.status) tempErrors.status = "Status is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    //updateting user's data
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Added validation before submitting
        if (!validate()) {
            toast.error("Please fix the errors before submitting.");
            return;
        }
        console.log(input);

        try {
            const res = await axios.put('http://localhost:3000/users/' + userId,
                { ...input
                    // name:input.name,
                    // email:input.email,
                    // role:input.role,
                    // status:input.status,
                },
                { headers: { "Content-Type": "application/json" } })
            toast.success('User Updated')
            setInput({
                name: '',
                email: '',
                role: '',
                status: 'Active'
            })
            //   console.log("res",res)
        } catch (error) {
            console.log("error", error)
        }
    }
    return (
        <Layout>

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                    Edit <span className="text-blue-700">USER</span>
                </h1>
                <div className='flex flex-row'>
                    <div className='basis-1/4'></div>
                    <div className='basis-1/2'>
                        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                            <form onSubmit={handleFormSubmit} method="post">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-600 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter name"
                                        name="name"
                                        value={input.name}
                                        required
                                        onChange={handleInput}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={input.email}
                                        onChange={handleInput}
                                        placeholder="Enter email"
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="role" className="block text-gray-600 mb-1">Role</label>
                                    <select
                                        id="role"
                                        onChange={handleInput}
                                        value={input.role}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                        name="role"
                                    >
                                        <option value="" disabled>Select a role</option>
                                        <option value="admin">Admin</option>
                                        <option value="editor">Editor</option>
                                        <option value="viewer">Viewer</option>
                                    </select>
                                    {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                                </div>


                                <div className="mb-4">
                                    <label htmlFor="status" className="block text-gray-600 mb-1">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        onChange={handleInput}
                                        value={input.status}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                    {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                                >
                                    Update User Detail
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EditUser
