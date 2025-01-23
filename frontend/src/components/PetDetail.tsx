import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
// import pets from "../data/pets"; // Import the pets data

const SinglePet: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get pet id from URL params
  const { petsList } = useSelector((state: RootState) => state.pets);
  console.log(petsList, "petsList");
  //   const pet = petsList.find((p) => p._id === id);
  //   const pet = pets.find((p) => p.name.toLowerCase() === id?.toLowerCase()); // Find pet by id

  //   if (!pet) {
  //     return (
  //       <div className="text-center text-xl text-red-600">Pet not found!</div>
  //     );
  //   }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full md:w-1/2">
          <img
            src={pet.petImage}
            alt={pet.name}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{pet.name}</h2>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Type:</span> {pet.type}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Breed:</span> {pet.breed}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Age:</span> {pet.age} years
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Gender:</span> {pet.gender}
          </p>
          <p className="text-gray-600 text-lg mt-4">
            <span className="font-semibold">Notes:</span> {pet.notes}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default SinglePet;
