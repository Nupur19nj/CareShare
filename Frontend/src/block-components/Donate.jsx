import { ethers } from "ethers";
import FatchMemo from "./FatchMemo";

const Donate = ({ state }) => {
  async function DonateNow(e) {
    e.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    console.log(name, message, amount);
    const transaction = await contract.Pey(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
    alert("donation successfully Done!");
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-lg flex justify-center items-center h-full">
  <form onSubmit={DonateNow} className="max-w-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-black">Name</label>
      <input
        type="text"
        className="form-input mt-1 block w-full border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring"
        id="name"
        placeholder="Enter Your Name"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-black">Message</label>
      <textarea
        type="text"
        className="form-textarea mt-1 block w-full border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring"
        id="message"
        placeholder="Enter Your Message"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-[#d25f5f] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      disabled={!state.contract}
    >
      Pay
    </button>
  </form>
</div>

      <FatchMemo state={state} />
    </>
  );
};

export default Donate;
