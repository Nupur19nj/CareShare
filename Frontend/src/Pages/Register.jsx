// // Register.jsx
// import React, { useState } from "react";
// // import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     try {
//       const body = { name, contact, password };
//       console.log(body);
//       fetch("http://localhost:4000/api/v1/register", {
//         method: "POST",
//         crossDomain: true,
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           "Access-Control-Allow-Origin": "*",
//         },
//         body: JSON.stringify(body), // Pass the corrected body object here
//       })
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//     } catch (error) {
//       setError(error); // Set error message
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && (
//         <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>
//       )}
//       {/* {"Enter valid values."} */}
//       {/* Display error message */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="border border-gray-300 rounded mb-2 p-2 w-full"
//         />
//         <input
//           type="tel"
//           placeholder="Contact"
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//           required
//           className="border border-gray-300 rounded mb-2 p-2 w-full"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="border border-gray-300 rounded mb-2 p-2 w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
// Register.jsx
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    // Added async keyword
    e.preventDefault();
    try {
      const body = { name, contact, password };
      console.log(body);
      const response = await fetch("http://localhost:4000/api/v1/register", {
        // Wait for the fetch request to complete
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json(); // Wait for parsing the response JSON
      console.log(data);
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-4">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
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
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
