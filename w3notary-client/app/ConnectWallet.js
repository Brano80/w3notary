"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#3b5998] to-[#192f6a] text-white">
      <h1 className="text-3xl font-bold mb-8">Connect Your Wallet</h1>
      <ConnectButton />
    </div>
  );
}