import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Appointment {
  petOwner: { _id: string; name: string } | string;
  pet: {
    breed: string;
    _id: string;
    name: string;
  };
  doctor: { _id: string; name: string };
  appointmentDate: string;
  query: string;
  status: "Pending" | "Approved" | "Rejected";
  doctorResponse: "Pending" | "Responded";
  _id: string;
}

interface AppointmentState {
  bookAppointment: Appointment | null;
  appointments: Appointment[];
  allAppointments: Appointment[];
  responseApt: Appointment | null;
}

const initialState: AppointmentState = {
  bookAppointment: null,
  appointments: [],
  allAppointments: [],
  responseApt: null,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    bookApt: (state, action) => {
      state.bookAppointment = action.payload;
      localStorage.setItem(
        "bookAppointment",
        JSON.stringify(state.bookAppointment)
      );
    },
    setAppointments: (state, action) => {
      state.appointments = action.payload; // Overwrite with API response
    },
    getAllAppointments: (state, action) => {
      state.allAppointments = action.payload;
    },
    setAptResponse: (state, action) => {
      state.responseApt = action.payload;
    },
  },
});

export const { bookApt, setAppointments, getAllAppointments, setAptResponse } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
