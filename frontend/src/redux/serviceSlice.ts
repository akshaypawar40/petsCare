import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Service interface
interface Service {
  id: string;
  _id: string;
  description: string;
  price: number;
  title: string;
  image: string;
}

// Define the initial state for the slice
interface ServiceState {
  allServices: Service[];
  SingleService: Service | null;
  addService: Service | null;
  updateService: Service | null;
  removeService: Service | null;
}

const initialState: ServiceState = {
  allServices: [], // Initialize as an empty array
  SingleService: null,
  addService: null,
  updateService: null,
  removeService: null,
};

const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    getServices(state, action: PayloadAction<Service[]>) {
      state.allServices = action.payload;
    },
    getSingleService(state, action) {
      state.SingleService = action.payload;
      localStorage.setItem(
        "SingleService",
        JSON.stringify(state.SingleService)
      );
    },
    addService(state, action) {
      state.addService = action.payload;
      // state.allServices= state.allServices.push(action.payload);
    },
    editService(state, action) {
      state.updateService = action.payload;
      localStorage.setItem(
        "updateService",
        JSON.stringify(state.updateService)
      );
    },
    deleteService(state, action) {
      state.removeService = action.payload;
    },
  },
});

export const {
  getServices,
  getSingleService,
  addService,
  editService,
  deleteService,
} = serviceSlice.actions;
export default serviceSlice.reducer;
