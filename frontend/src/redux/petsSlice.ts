import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   petsList: JSON.parse(localStorage.getItem("petsList") || "[]"), // Load pets from local storage
// };

const initialState = {
  petsList: [],
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.petsList= action.payload;
      localStorage.setItem("petsList", JSON.stringify(state.petsList)); // Save to local storage
    },
    singlePet:(state,action)=>{
      state.petsList=action.payload;
    }
  },
});

export const { setPets, singlePet } = petsSlice.actions;
export default petsSlice.reducer;
