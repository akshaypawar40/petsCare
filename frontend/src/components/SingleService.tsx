import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { fetchSingleService } from "../services/adminServices";

const SingleService: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { servid } = useParams<{ servid: string }>(); // Use the service ID from the URL

  // Access SingleService from the Redux store
  const { SingleService } = useSelector((state: any) => state.services);

  useEffect(() => {
    if (servid) {
      dispatch(fetchSingleService(servid)); // Fetch the service by ID
    }
  }, [dispatch, servid]);

  return (
    <div className="container mx-auto px-6 py-8 mt-20">
      {SingleService ? (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">{SingleService.title}</h2>
          <p className="text-gray-300 mb-4">{SingleService.description}</p>
          <p className="text-blue-400 font-semibold mb-4">
            Price: ${SingleService.price}
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading service details...</p>
      )}
    </div>
  );
};

export default SingleService;
