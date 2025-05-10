import dynamic from "next/dynamic";

// ✅ Load the Connect Wallet page on the client only (no SSR)
const ClientOnlyWalletPage = dynamic(() => import("../../components/ConnectWalletPage"), {
  ssr: false,
});

export default function Page() {
  return <ClientOnlyWalletPage />;
}

