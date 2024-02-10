import React from "react";
import data from "./data.json";
import kid from "../assets/kids.jpg";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"; // Importing the home icon
import im1 from "../assets/ngo_images/book_0.jpg";
import im2 from "../assets/ngo_images/toys_0.jpg";
import im3 from "../assets/ngo_images/food_1.jpg";
import im4 from "../assets/ngo_images/cloth_1.jpg";
import "./Ngo.css";

const Ngo = () => {
  const { index } = useParams();
  const ngoData = data[index];
  return (
    <>
      <div className="h-screen">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          className=" bg-green-100"
        >
          <Link to="/" className="ml-2 text-left text-black">
            {/* Replaced text with home icon */}
            <h1 className="px-4 py-2 text-black rounded cursor-pointer  inline-block">
              <AiOutlineHome
                className="inline-block mr-2"
                style={{ fontSize: "1.8rem" }}
              />
            </h1>
          </Link>
          <div style={{ flex: "2" }} className="text-center">
            <h1 className="text-center text-4xl text-bold p-3">
              {ngoData.name}
            </h1>
            <p>
              Address: {ngoData.address} <br />
              Contact: {ngoData.contact}
            </p>
            <h1 className="text-center text-2xl text-bold mt-6">About us</h1>
            <p className="text-center p-2">{ngoData.about}</p>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div style={{ flex: "2" }}>
                <p className="text-center text-4xl text-bold text-green-700">
                  {ngoData.helpers}
                </p>
                <h1 className="text-center">Helpers</h1>
              </div>
              <div style={{ flex: "2" }}>
                <p className="text-center text-4xl text-bold text-green-700">
                  {ngoData.receivers}
                </p>
                <h1 className="text-center">Receivers</h1>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: "4",
              backgroundImage: `url(${ngoData.images[0]})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
          </div>
        </div>
      </div>
      <div className=" bg-green-100 text-center">
        <h1 className="text-3xl text-bold p-5">
          See the happiness of our receivers
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-4 ml-4 mr-4">
          <div className="relative mb-4">
            <div
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${im1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            ></div>
          </div>
          <div className="relative mb-4">
            <div
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${im2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            ></div>
          </div>
          <div className="relative mb-4">
            <div
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${im3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            ></div>
          </div>
          <div className="relative mb-4">
            <div
              className="bg-gray-200 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${im4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <a
        href={`https://wa.me/${ngoData.contact}`}
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  );
};

export default Ngo;

// import React from "react";
// import data from "./data.json";
// import kid from "../assets/kids.jpg";
// import Footer from "../components/Footer";
// import { Link, useParams } from "react-router-dom";
// import im1 from "../assets/ngo_images/book_0.jpg";
// import im2 from "../assets/ngo_images/toys_0.jpg";
// import im3 from "../assets/ngo_images/food_1.jpg";
// import im4 from "../assets/ngo_images/cloth_1.jpg";
// import "./Ngo.css";

// const Ngo = () => {
//   const { index } = useParams();
//   const ngoData = data[index];
//   return (
//     <>
//       <div className="h-screen">
//         <div
//           style={{ display: "flex", flexDirection: "column", height: "100%" }}
//           className=" bg-green-100"
//         >
//           <Link to="/" className="ml-2 text-left text-black">
//             <h1 className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 inline-block">
//               Back to homepage
//             </h1>
//           </Link>
//           <div style={{ flex: "2" }} className="text-center">
//             <h1 className="text-center text-4xl text-bold p-3">
//               {ngoData.name}
//             </h1>
//             <p>
//               Address: {ngoData.address} <br />
//               Contact: {ngoData.contact}
//             </p>
//             <h1 className="text-center text-2xl text-bold mt-6">About us</h1>
//             <p className="text-center p-2">{ngoData.about}</p>
//             <div
//               style={{ display: "flex", flexDirection: "row", width: "100%" }}
//             >
//               <div style={{ flex: "2" }}>
//                 <p className="text-center text-4xl text-bold text-green-700">
//                   {ngoData.helpers}
//                 </p>
//                 <h1 className="text-center">Helpers</h1>
//               </div>
//               <div style={{ flex: "2" }}>
//                 <p className="text-center text-4xl text-bold text-green-700">
//                   {ngoData.receivers}
//                 </p>
//                 <h1 className="text-center">Receivers</h1>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               flex: "4",
//               backgroundImage: `url(${ngoData.images[0]})`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             {" "}
//           </div>
//         </div>
//       </div>
//       <div className=" bg-green-100 text-center">
//         <h1 className="text-3xl text-bold p-5">
//           See the happiness of our receivers
//         </h1>
//         <div className="grid grid-cols-4 gap-4 mt-4 ml-4 mr-4">
//           <div className="relative mb-4">
//             <div
//               className="bg-gray-200 rounded-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${im1})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "300px",
//               }}
//             ></div>
//           </div>
//           <div className="relative mb-4">
//             <div
//               className="bg-gray-200 rounded-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${im2})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "300px",
//               }}
//             ></div>
//           </div>
//           <div className="relative mb-4">
//             <div
//               className="bg-gray-200 rounded-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${im3})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "300px",
//               }}
//             ></div>
//           </div>
//           <div className="relative mb-4">
//             <div
//               className="bg-gray-200 rounded-lg overflow-hidden"
//               style={{
//                 backgroundImage: `url(${im4})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "300px",
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <a
//         href={`https://wa.me/${ngoData.contact}`}
//         class="whatsapp_float"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <i class="fa fa-whatsapp whatsapp-icon"></i>
//       </a>
//       <Footer />
//     </>
//   );
// };

// export default Ngo;
