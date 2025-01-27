import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchSingleDoctor } from "../services/doctorService";

const SingleDoctor: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { doc_id } = useParams(); // Fetch doctor ID from route params
  const { singleDoctor } = useSelector((state: RootState) => state.doctor);

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

  // Display the doctor's details
  return (
    <div className="container mx-auto px-6 py-8 mt-20">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <img
          src={singleDoctor.profileImage}
          alt={singleDoctor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-3xl font-semibold text-center mb-4">
          {singleDoctor.name}
        </h2>
        <p className="text-center text-gray-300 mb-2">
          <strong>Email:</strong> {singleDoctor.email}
        </p>
        <p className="text-center text-gray-300 mb-2">
          <strong>Specialization:</strong> {singleDoctor.specialization}
        </p>
        <p className="text-center text-gray-300 mb-2">
          <strong>Contact:</strong> {singleDoctor.contactNumber}
        </p>
        <p className="text-center text-gray-300 mb-2">
          <strong>Notes:</strong> {singleDoctor.notes}
        </p>
      </div>
    </div>
  );
};

export default SingleDoctor;
