import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { createService as addServiceAPI } from "../services/adminServices";
import toast, { Toaster } from "react-hot-toast";

const AddService: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: RootState) => state.user);
  const { addService } = useSelector((state: RootState) => state.services);

  // Local state for form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (userInfo && userInfo.isAdmin) {
        const newService = {
          ...formData,
          price: Number(formData.price), // Convert price to a number
        };

        await dispatch(addServiceAPI(newService));
        toast.success(` Added  Service Successfully`);
        navigate("/services"); // Redirect to the services page
      }

      // Dispatch the addService action
    } catch (error: any) {
      console.error("Failed to add service:", error.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white mt-20 max-w-md mx-auto text-white rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl text-gray-800 font-bold  text-center mb-6">
          Add a New Service
        </h2>
        <form onSubmit={handleSubmit} className=" mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="font-normal text-sm shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="font-normal text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="price"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="font-normal text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-sm bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
