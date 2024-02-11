import React, { useState } from "react";
import hand from "../assets/hand.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
          name,
          contact,
          password,
        }
      );
      const { token, user } = response.data;
      // Store token or user information in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      // Redirect user to home ("/") upon successful registration
      window.location.href = "/";
    } catch (error) {
      alert("Invalid credentials");
      console.error("Error:", error); // Log and handle the error
      setError(error.response.data.message); // Set error message
    }
  };

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/2 h-screen flex justify-center items-center">
        <img src={hand} alt="Girl" className="max-w-sm" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4">
              {error}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
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
              className="bg-[#3b0000] text-white py-2 px-4 rounded hover:bg-[#9b1515] w-full mb-2"
            >
              Register
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#3b0000] font-bold">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
