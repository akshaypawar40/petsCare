import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4">
      <h1 className="text-4xl font-bold text-center  mb-4">
        Welcome to petsCare!
      </h1>
      <p className="text-lg text-center  mb-8">
        Your one-stop solution for all pet care needs.
      </p>
      <div className="flex justify-center space-x-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
          Learn More
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
