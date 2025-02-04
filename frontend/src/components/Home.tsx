import React, { useEffect, lazy, Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets, updatePet } from "../services/petsService";
import { AppDispatch, RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const PetsCard = lazy(() => import("../components/PetsCard"));

interface Pet {
  _id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  notes: string;
  image: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { petsList } = useSelector((state: RootState) => state.pets);
  const { userInfo } = useSelector((state: RootState) => state.user);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        await dispatch(fetchPets);
        console.log("Fetched Pets Data:", petsList);
      } catch (error: any) {
        console.error("Error fetching pets:", error.message);
      }
    };

    fetchPetsData();
  }, [dispatch]);

  const handleCreatePet = () => {
    navigate("/createPet");
  };

  const isAdmin = userInfo && userInfo.email === "admin@gmail.com";

  return (
    <div className="container mx-auto px-4 pt-12 pb-5">
      {/* Hero Section */}
      <div className="relative mb-8 sm:mb-4 mt-4">
        <div className="absolute"></div>
        <div className="relative text-center py-2 pb-0">
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-800 my-4">
            Welcome to Pet Paradise 🐾
          </h1>
          <p className="text-sm sm:text-lg text-green-600 max-w-lg mx-auto mt-5 font-medium">
            Explore our collection of adorable pets and give them the love and
            care they deserve
          </p>
        </div>
      </div>
      {/* <input
          type="string"
          value={search}
          className="bg-white p-3 border border-gray-400 rounded-lg text-sm outline-none w-full lg:w-[25vw] mt-3 md:mt-0"
          onChange={() => setSearch(e.target.value)}
          placeholder="Search by Name"
        /> */}
      {/* Admin Buttons */}

      {/* Pets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-8">
        {petsList.map((pet: Pet) => (
          <Suspense fallback={"...Loading"}>
            <PetsCard key={pet._id} {...pet} />
          </Suspense>
        ))}
      </div>

      {/* Call to Action for Admin */}
      {isAdmin && (
        <div className="text-center mt-5">
          <h3 className="text-lg sm:text-2xl font-medium mb-4">
            Don't see the perfect pet ? 🐶🐱
          </h3>
          <button
            onClick={handleCreatePet}
            className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-pink-600 transition-all text-sm sm:text-base font-extrabold"
          >
            Create a Pet Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
