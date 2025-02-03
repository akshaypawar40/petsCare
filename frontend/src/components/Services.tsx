import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchServices } from "../services/adminServices";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
// Define the service interface
interface Service {
  id: string;
  _id: string;
  title: string;
  description: string;
  price: number;
}

const Services: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // Access the state of all services from Redux
  const { allServices } = useSelector((state: RootState) => state.services);
  const { userInfo } = useSelector((state: RootState) => state.user);

  // Fetch all services on component mount
  useEffect(() => {
    dispatch(fetchServices);
  }, [dispatch]);

  const handleAddServices = () => {
    navigate("/create/Service");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16 ">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our Services
      </h2>
      <motion.div
        className="flex justify-end align-center  mb-8 "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        {userInfo.isAdmin && (
          <div className="flex flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAddServices}
              className="bg-indigo-600 text-white font-medium p-2 md:px-5 sm:p-3 text-sm sm:text-lg flex items-center justify-center rounded-lg shadow-md hover:bg-indigo-700 transition-all hover:scale-105"
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Add Services
            </button>
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices && allServices.length > 0 ? (
          allServices.map((service: Service) => (
            <Link to={`/service/${service._id}`}>
              <div
                key={service._id}
                className="bg-white text-gray-900 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-green-500">
                      ${service.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No Services found</p>
        )}
      </div>
    </div>
  );
};

export default Services;
