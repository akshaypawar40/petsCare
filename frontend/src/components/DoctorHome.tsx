import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fethDoctorsList } from "../services/doctorService";
import { Link } from "react-router-dom";

const DoctorHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Fetch doctors list from the Redux store
  const { doctorsList } = useSelector((state: RootState) => state.doctor);

  useEffect(() => {
    // Dispatch action to fetch doctors list
    dispatch(fethDoctorsList);
  }, [dispatch]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-center text-white mb-12">
        Meet Our Doctors
      </h2>
      {doctorsList && doctorsList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsList.map((doctor: any) => (
            <Link to={`/doctor/${doctor._id}`}>
              <div
                key={doctor.email}
                className="bg-gray-800 text-white rounded-lg shadow-lg p-6"
              >
                <img
                  src={doctor.profileImage}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {doctor.name}
                </h3>
                <p className="text-center text-gray-300 mb-4">
                  Specialization: {doctor.specialization}
                </p>
                <p className="text-center text-gray-300 mb-2">
                  Contact: {doctor.contactNumber}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-300">No Doctors Found</p>
      )}
    </div>
  );
};

export default DoctorHome;
