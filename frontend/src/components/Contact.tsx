import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(setFormData, "setFormData");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20 mb-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Contact Us
      </h2>
      <p className="text-center text-gray-800 mb-6 font-normal text-xl">
        Have questions? Feel free to reach out!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
