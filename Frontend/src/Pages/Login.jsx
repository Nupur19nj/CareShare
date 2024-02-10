import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/login", {
        contact,
        password,
      });
      console.log(response.data); // Handle success response
      // Redirect user or perform any action upon successful login
    } catch (error) {
      console.error("Error:", error); // Log and handle the error
      setError(error.response.data.message); // Set error message
      // setTimeout(() => setError(""), 5000); // Clear error message after 5 seconds
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="border border-gray-300 rounded mb-2 p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded mb-2 p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
