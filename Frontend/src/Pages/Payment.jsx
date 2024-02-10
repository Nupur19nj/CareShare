import { useEffect, useState } from "react";
import { ABI, Contract } from "../contracts/donte";
import { ethers } from "ethers";
import Donate from "../block-components/Donate";
import donate from "../assets/don.jpg";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
// import FatchMemo from "./block-components/FatchMemo";

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
          const accounts = window.ethereum.request({
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
          alert("install metamsk");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  return (
    // <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
    //   <img src={donate} className="img-fluid" alt=".." width="100%" />
    //   <p
    //     className="text-muted lead "
    //     style={{ marginTop: "10px", marginLeft: "5px" }}
    //   ></p>
    //   <div className="container">
    //     <Donate state={state} />
    //   </div>
    // </div>
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ flex: "1", display: "flex" }}>
        <div style={{ flex: "3" }}>
          <img
            src={donate}
            className="img-fluid"
            alt=".."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ flex: "1", backgroundColor: "#EFEFEF", height: "100%" }}>
          <Link to="/" className="ml-2 text-left text-black">
            {/* Replaced text with home icon */}
            <h1 className="px-4 py-2 text-black rounded cursor-pointer  inline-block">
              <AiOutlineHome
                className="inline-block mr-2"
                style={{ fontSize: "1.8rem" }}
              />
            </h1>
          </Link>
          <div className="container" style={{ padding: "20px" }}>
            <Donate state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
