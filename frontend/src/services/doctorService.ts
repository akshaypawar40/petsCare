import axios from "axios";
import { AppDispatch } from "../redux/store";
import { getAllDoctors, getSingleDoctor } from "../redux/doctorSlice";

const API_URL= "/api/doctors/"



export const fethDoctorsList = async (dispatch:AppDispatch)=>{
    try{
        const response = await axios.get(`${API_URL}`);
        dispatch(getAllDoctors(response.data.doctors));
        return response.data.doctors;
    }catch(error:any){
        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data?.message || "Failed to fetch pets");
        }
        throw new Error("An unexpected error occurred");
    }
}

export const fetchSingleDoctor =(doc_id:string)=> async(dispatch:AppDispatch)=>{
try{
    const response= await axios.get(`${API_URL}${doc_id}`);
    dispatch(getSingleDoctor(response.data.doctor));
    return response.data;
}catch(error:any){
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch pets");
    }
    throw new Error("An unexpected error occurred");

}
}