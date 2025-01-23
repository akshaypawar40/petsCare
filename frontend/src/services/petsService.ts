import axios from "axios";
import { setPets, singlePet } from "../redux/petsSlice";
import { AppDispatch } from "../redux/store";


const API_URL = "/api/pets/";

export const fetchPets = async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(setPets(response.data.data)); // Access data from the API response
    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch pets");
    }
    throw new Error("An unexpected error occurred");
  }
};

export const FetchSinglePet= async(dispatch:AppDispatch)=>{
  try{
    const response= await axios.get(`${API_URL}:id`);

    dispatch(singlePet(response.data.pet));

  }catch(error:any){
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch single pet");
    }
    throw new Error("An unexpected error occurred");
  }
}