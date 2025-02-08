import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./App";

// ✅ Ensure 'root' element exists before rendering
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(
    "Root element not found. Ensure index.html has a <div id='root'></div>"
  );
}

// ✅ Add a simple fallback UI for loading state
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-lg font-semibold text-gray-700">Loading...</p>
  </div>
);

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingFallback />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
