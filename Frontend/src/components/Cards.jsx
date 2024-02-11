// import React from "react";
// import secure from "../assets/secure.png";
// import Msg from "../assets/msg.jpg";
// import don from "../assets/don.jpg";
// const Cards = () => {
//   return (
//     <div className="w-full py-5 px-4" id="learn">
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-12">
//         <div className="w-180 shadow-xl  bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
//           <h2 className="text-2xl text-black font-bold text-center py-8">
//             Messaging system
//           </h2>
//           <div className="flex-grow">
//             <img
//               className="w-full mx-auto mt-[1px] bg-white h-full"
//               src={Msg}
//               alt="/"
//             />
//           </div>
//           <button className="bg-[#d25f5f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
//             Learn More
//           </button>
//         </div>

//         <div className="w-180 shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
//           {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
//           <h2 className="text-2xl text-black font-bold text-center py-8">
//             Secure Communication
//           </h2>
//           <div className="flex-grow">
//             <img
//               className="w-full mx-auto mt-[1px] bg-white h-full"
//               src={secure}
//               alt="/"
//             />
//           </div>
//           <button className="text-black bg-[#d25f5f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
//             Learn More
//           </button>
//         </div>

//         <div className="w-180 shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
//           {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
//           <h2 className="text-2xl text-black font-bold text-center py-8">
//             Easy Donation
//           </h2>
//           <div className="flex-grow">
//             <img
//               className="w-full mx-auto mt-[1px] bg-white h-full"
//               src={don}
//               alt="/"
//             />
//           </div>
//           <button className="bg-[#d25f5f] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
import React from "react";
import secure from "../assets/secure.png";
import Msg from "../assets/charity.jpg";
import don from "../assets/don.jpg";

const Cards = () => {
  return (
    <div className="w-full py-5 px-4" id="learn">
      <div className="max-w-[1240px] mx-auto grid gap-12 my-20 md:grid-cols-3">
        <div className="shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl text-black font-bold text-center py-8">
            Categorized donation
          </h2>
          <div className="flex-grow">
            <img className="w-full mx-auto bg-white h-full" src={Msg} alt="/" />
          </div>
          <button className="bg-[#d25f5f] w-full max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 block">
            Learn More
          </button>

        </div>

        <div className="shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl text-black font-bold text-center py-8">
            Secure Transaction
          </h2>
          <div className="flex-grow">
            <img
              className="w-full mx-auto bg-white h-full"
              src={secure}
              alt="/"
            />
          </div>
          <button className="bg-[#d25f5f] w-full max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 block">
            Learn More
          </button>
        </div>

        <div className="shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl text-black font-bold text-center py-8">
            Easy Donation
          </h2>
          <div className="flex-grow">
            <img className="w-full mx-auto bg-white h-full" src={don} alt="/" />
          </div>
          <button className="bg-[#d25f5f] w-full max-w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 block">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
