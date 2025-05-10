"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected && address) {
      localStorage.setItem("walletAddress", address);
    }
  }, [isConnected, address]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#3b5998] to-[#192f6a] text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to W3Notary</h1>
      <p className="mb-8 text-center text-lg">Your Web3 Document Notarization Hub</p>
      <ConnectButton />
      {isConnected && (
        <div className="mt-6 text-sm">
          ✅ Connected as: <span className="font-mono">{address}</span>
        </div>
      )}
    </div>
  );
}
