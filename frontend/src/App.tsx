import React from "react";

interface sonso {
  name: string;
  id: number;
}

const App: React.FC<sonso> = ({ name, id }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white font-extrabold text-4xl">
      <h1>{name}</h1>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
