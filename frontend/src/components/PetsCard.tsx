import React from "react";
import { Link } from "react-router-dom";

interface PetCardProps {
  _id: string;
  name: string;
  type: string;
  gender: string;
  petImage: string;
}

const PetsCard: React.FC<PetCardProps> = ({
  _id,
  name,
  type,
  gender,
  petImage,
}) => {
  return (
    <Link to={`/pet/${_id}`} className="block max-w-sm mx-auto">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={petImage} alt={name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-gray-800">Name: {name}</h2>
          <p className="text-gray-600">
            <span className="font-semibold text-2xl">Type:</span> {type}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-2xl">Gender:</span> {gender}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PetsCard;
