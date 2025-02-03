import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CreatePet: React.FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const { userInfo } = useSelector((state: RootState) => state.user);

  // Handle Image Selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image before upload
    }
  };

  // Upload Image
  const handleImageUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("breed", breed);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("notes", notes);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log("Uploaded Image Response:", data);
      const uploadedImageUrl = data.imageUrl || data;
      setImageUrl(uploadedImageUrl); // Save image URL for later form submission
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image Upload Error:", error);
      alert("Failed to upload image.");
    }
  };

  // Submit Pet Details
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !type || !breed || !age || !gender) {
      alert("All required fields must be filled.");
      return;
    }

    try {
      if (!userInfo) {
        console.error("No authentication token found!");
        alert("You need to be logged in to create a pet.");
        return;
      }

      if (!imageUrl) {
        alert("Please upload an image before submitting.");
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`, // Include the JWT token
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/pets/create",
        {
          name,
          type,
          breed,
          age,
          gender,
          notes,
          image: imageUrl, // Send uploaded image URL
        },
        config
      );

      alert("Pet created successfully!");
      console.log("Created Pet:", data);
      console.log(imageUrl, "image");
    } catch (error) {
      console.error("Error creating pet:", error);
      alert("Failed to create pet.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-6 mt-20 mb-8 w-full">
      <div className="bg-white p-6 max-w-2xl mx-auto rounded-lg p-6 shadow-lg w-full transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-4">
          Create Pet
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pet Name and Pet Type in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pet Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Pet Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Breed and Age in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Breed
              </label>
              <input
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age (in years)
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                min="0"
                className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              />
            </div>
          </div>

          {/* Gender and Neutered Checkbox in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className=" px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 rounded-md w-full h-40 object-cover text-sm"
              />
            )}
            <button
              type="button"
              onClick={handleImageUpload}
              className="ml-5 bg-blue-500 text-white p-2 mt-2 rounded-lg text-sm"
            >
              Upload Image
            </button>
          </div>

          {/* Notes */}
          <div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 mt-1 border rounded-lg text-sm font-normal"
              placeholder="Additional Notes"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className=" bg-teal-600 text-white p-2 px-3 rounded-lg text-sm"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePet;
