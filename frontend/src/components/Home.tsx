// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPets } from "../services/petsService";
// import PetsCard from "../components/PetsCard";

// // Define the types for the Redux state and the Pet
// interface Pet {
//   _id: string;
//   name: string;
//   type: string;
//   breed: string;
//   age: number;
//   gender: string;
//   petImage: string;
// }

// interface RootState {
//   pets: {
//     petsList: Pet[];
//   };
// }

// const Home: React.FC = () => {
//   const dispatch = useDispatch();

//   // TypeScript selector with appropriate types
//   const { petsList } = useSelector((state: RootState) => state.pets);
//   console.log(petsList, "petsList");

//   const fetchPetsData = async () => {
//     try {
//       await fetchPets(dispatch);
//     } catch (error: any) {
//       console.error("Error fetching pets:", error.message);
//     }
//   };

//   // Trigger the fetchPetsData function when the component mounts
//   useEffect(() => {
//     fetchPetsData();
//   }, [dispatch]);

//   return (
//     <div className="py-8 px-4 bg-gradient-to-b from-indigo-50 to-white mt-20">
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-indigo-800 mb-8">
//         Our Available Pets
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//         {Array.isArray(petsList) && petsList.length > 0 ? (
//           petsList.map((pet) => <PetsCard key={pet._id} {...pet} />)
//         ) : (
//           <p className="text-center text-gray-600">
//             No pets available at the moment.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../services/petsService";
import PetsCard from "../components/PetsCard";
import { RootState } from "../redux/store";

interface Pet {
  _id: string;
  name: string;
  type: string;
  gender: string;
  petImage: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { petsList } = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        await fetchPets(dispatch);
      } catch (error: any) {
        console.error("Error fetching pets:", error.message);
      }
    };

    fetchPetsData();
  }, [dispatch]);

  return (
    <div className="py-8 px-4 bg-gradient-to-b from-indigo-50 to-white mt-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-indigo-800 mb-8">
        Our Available Pets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {petsList.map((pet: Pet) => (
          <PetsCard key={pet._id} {...pet} />
        ))}
      </div>
    </div>
  );
};

export default Home;
