import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { cancelDoctor, fetchSingleDoctor } from "../services/doctorService";
import EditDoctorModal from "./EditDoctorModal";

const SingleDoctor: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { doc_id } = useParams(); // Fetch doctor ID from route params
  const { singleDoctor } = useSelector((state: RootState) => state.doctor);
  const { userInfo } = useSelector((state: RootState) => state.user);

  const [isOpen, setisOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (doc_id) {
      dispatch(fetchSingleDoctor(doc_id)); // Fetch doctor details if doc_id exists
    }
  }, [dispatch, doc_id]);

  // If no doctor is found, display a loading or error message
  if (!singleDoctor) {
    return (
      <div className="container mx-auto px-6 py-8 mt-20">
        <p className="text-center text-gray-300">
          Doctor details not available.
        </p>
      </div>
    );
  }

  const handleDelete = async (singleDoctor: any) => {
    if (!singleDoctor || !singleDoctor._id) {
      console.error("Error: Doctor ID is undefined.");
      return;
    }
    if (singleDoctor) {
      try {
        await dispatch(cancelDoctor(singleDoctor));
        navigate("/doctors");
      } catch (err: any) {
        console.error("Error deleting service:", err);
      }
    }
  };

  // Display the doctor's details
  return (
    <div className="container mx-auto px-6 py-8 mt-20">
      <div className="bg-white max-w-md mx-auto text-white rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
        <img
          src={singleDoctor.profileImage}
          alt={singleDoctor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xxl font-semibold text-center mb-4 text-gray-800">
          {singleDoctor.name}
        </h2>
        <p className="text-center text-gray-700 text-xl font-semibold text-center mb-2">
          <strong>Email:</strong> {singleDoctor.email}
        </p>
        <p className="text-center text-gray-600 text-sm leading-relaxed mb-3">
          <strong className="">Specialization:</strong>{" "}
          {singleDoctor.specialization}
        </p>
        <p className="text-center text-gray-600 text-sm leading-relaxed mb-3">
          <strong>Notes:</strong> {singleDoctor.notes}
        </p>
        <p className="text-center text-gray-600 text-xl  leading-relaxed mb-3">
          <strong>Contact:</strong> {singleDoctor.contactNumber}
        </p>
        {userInfo.isAdmin && (
          <div className="flex justify-between items-center">
            <button
              onClick={() => setisOpen(true)}
              className="text-sm bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(singleDoctor)}
              className="text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <EditDoctorModal
        singleDoctor={singleDoctor}
        isOpen={isOpen}
        onClose={() => setisOpen(false)}
      />
    </div>
  );
};

export default SingleDoctor;
