import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // ✅ Use sessionStorage for persistence
import userReducer from "./userSlice";
import petsReducer from "./petsSlice";
import serviceReducer from "./serviceSlice";
import doctorReducer from "./doctorSlice";
import appointmentReducer from "./appointmentSlice";

const persistConfig = {
  storage: storageSession,
  key: "root",
  whitelist: ["user", "appointment", "pets", "services", "doctor"], // ✅ Ensure all reducers are listed
};

const persistedUserReducer = persistReducer(
  { ...persistConfig, key: "user" },
  userReducer
);
const persistedAppointmentReducer = persistReducer(
  { ...persistConfig, key: "appointment" },
  appointmentReducer
);
const persistedPetsReducer = persistReducer(
  { ...persistConfig, key: "pets" },
  petsReducer
);
const persistedServiceReducer = persistReducer(
  { ...persistConfig, key: "services" },
  serviceReducer
);
const persistedDoctorReducer = persistReducer(
  { ...persistConfig, key: "doctor" },
  doctorReducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    pets: persistedPetsReducer,
    services: persistedServiceReducer,
    doctor: persistedDoctorReducer,
    appointment: persistedAppointmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ Disable serializable check for redux-persist
    }),
});

// ✅ Ensure persistor runs immediately after store is created
export const persistor = persistStore(store);
persistor.persist(); // ✅ Ensures Redux state is stored immediately

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
