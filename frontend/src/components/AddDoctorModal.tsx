import React, { useState } from "react";
import { createDoctor } from "../services/doctorService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddDoctorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    contactNumber: "",
    notes: "",
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Doctor added:", formData);
    const newDoctor = {
      ...formData,
    };
    dispatch(createDoctor(newDoctor));
    navigate("/doctors");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white max-w-2xl mx-auto rounded-lg p-6 shadow-lg w-full">
        <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
          Add a New Doctor
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-gray-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-gray-700"
              />
            </div>

            {/* Specialization */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-gray-700"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-gray-700"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Notes
              </label>
              <input
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorModal;
function dispatch(arg0: { payload: any; type: "doctor/createDoctor" }) {
  throw new Error("Function not implemented.");
}
