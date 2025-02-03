import { createSlice } from "@reduxjs/toolkit";

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

interface petState {
  petsList: Pet[];
  pet: Pet | null;
}

const initialState: petState = {
  petsList: [],
  pet: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.petsList = action.payload;
      localStorage.setItem("petsList", JSON.stringify(state.petsList)); // Save to local storage
    },
    setSinglePet: (state, action) => {
      state.pet = action.payload;
      localStorage.setItem("pet", JSON.stringify(state.pet)); // Save to local storage
    },
  },
});

export const { setPets, setSinglePet } = petsSlice.actions;
export default petsSlice.reducer;
