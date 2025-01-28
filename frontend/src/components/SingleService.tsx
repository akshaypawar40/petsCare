import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchSingleService } from "../services/adminServices";

const SingleService: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { servid } = useParams<{ servid: string }>(); // Use the service ID from the URL

  const { userInfo } = useSelector((state: RootState) => state.user);

  // Access SingleService from the Redux store
  const { SingleService } = useSelector((state: any) => state.services);

  useEffect(() => {
    if (servid) {
      dispatch(fetchSingleService(servid)); // Fetch the service by ID
    }
  }, [dispatch, servid]);

  return (
    <div className="container mx-auto px-6 py-8 mt-20 ">
      {SingleService ? (
        <div className="bg-white text-white  max-w-md mx-auto rounded-lg shadow-lg p-6 mt-10">
          <h2 className=" text-center text-xxl font-semibold mb-4 text-gray-800">
            {SingleService.title}
          </h2>
          <p className=" text-center text-gray-600 text-xl leading-relaxed mb-4">
            {SingleService.description}
          </p>
          <p className=" text-center text-blue-400 font-semibold mb-4">
            Price: ${SingleService.price}
          </p>
          {userInfo.isAdmin && (
            <div className="flex justify-between items-center">
              <button className=" text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Edit
              </button>
              <button className=" text-sm bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading service details...</p>
      )}
    </div>
  );
};

export default SingleService;
