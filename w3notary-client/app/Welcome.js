// w3notary-client/app/Welcome.js

"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  const handleConnect = () => {
    router.push("/ConnectWallet");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#3b5998] to-[#192f6a] text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to W3Notary</h1>
      <p className="text-lg text-gray-200 mb-10 text-center">Your Web3 Document Notarization Hub</p>

      <button
        onClick={handleConnect}
        className="bg-white text-[#3b5998] font-bold py-4 px-10 rounded-full shadow-md hover:bg-gray-200 transition"
      >
        Connect Wallet
      </button>
    </div>
  );
}
