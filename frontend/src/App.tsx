import React, { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import PetDetail from "./components/PetDetail";
import CreatePet from "./components/CreatePet";
import SingleService from "./components/SingleService";
import DoctorHome from "./components/DoctorHome";
import SingleDoctor from "./components/SingleDoctor";
import AddService from "./components/AddService";
import ProtectedRoute from "./components/ProtectedRoute";

const App: FC = () => {
  return (
    <Router>
      <div className="h-screen flex items-center w-full flex-col font-extrabold text-4xl">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={<ProtectedRoute element={<Services />} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route
            path="/pets/:petId"
            element={
              <ProtectedRoute
                element={
                  <PetDetail
                    _id={""}
                    name={""}
                    breed={""}
                    age={0}
                    notes={""}
                    image={""}
                    type={""}
                    gender={""}
                  />
                }
              />
            }
          />
          <Route
            path="/createPet"
            element={<ProtectedRoute element={<CreatePet />} />}
          />
          <Route path="/service/:servid" element={<SingleService />} />
          <Route
            path="/doctors"
            element={<ProtectedRoute element={<DoctorHome />} />}
          />
          <Route path="/doctor/:doc_id" element={<SingleDoctor />} />
          <Route path="create/Service" element={<AddService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
