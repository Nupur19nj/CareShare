import { useEffect, useState } from "react";
import { ABI, Contract } from "../contracts/donte";
import { ethers } from "ethers";
import Donate from "../block-components/Donate";
import donate from "../assets/don.jpg";
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

function Payment() {
  const [state, setState] = useState({
    contract: null,
    provider: null,
    signer: null,
  });
  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = Contract;
      const contractABI = ABI;
      try {
        if (typeof window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(accounts);
          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <div style={{ position: "relative" }}>
    <Link to="/" className="ml-2 mt-2 text-left text-black" style={{ position: "absolute", top: 0, left: 0 }}>
      <h1 className="px-4 py-2 bg-[#d25f5f] text-white rounded cursor-pointer hover:bg-blue-600 inline-block" style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineHome style={{ marginRight: "8px" }} />
      </h1>
    </Link>
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
  <div style={{ flex: "1", display: "flex" }}>
    <div style={{ flex: "2" }}>
      <img
        src={donate}
        className="img-fluid"
        alt=".."
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    <div style={{ flex: "1", backgroundColor: "#EFEFEF", height: "100%", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ padding: "5px", margin: "auto" }}>
        <h1 className="text-black text-bold text-center mb-4 text-2xl">Send monetary via this form</h1>
        <Donate state={state} />
      </div>
    </div>
  </div>
</div>

  </div>
  );
}

export default Payment;
