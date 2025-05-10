// app/dashboard/page.js
"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    setWallet(savedAddress);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#3b5998] to-[#192f6a] text-white">
      <h1 className="text-3xl font-bold mb-4">My Dashboard</h1>
      {wallet ? (
        <p className="text-lg">🔐 Connected Wallet: <span className="font-mono">{wallet}</span></p>
      ) : (
        <p className="text-lg">Please connect your wallet first.</p>
      )}
    </div>
  );
}
