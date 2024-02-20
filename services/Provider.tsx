"use client";
import * as React from "react";
import { GetSiweMessageOptions,RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { RainbowKitProvider, connectorsForWallets, darkTheme } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, trustWallet, coinbaseWallet, rainbowWallet } from "@rainbow-me/rainbowkit/wallets";
import { sepolia,bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const { chains, publicClient } = configureChains(
  [sepolia, bscTestnet],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }),publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: "Coinbase", chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const demoAppInfo = {
  appName: "Web3 Events",
};

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: `Halooo silahkan di klik signaturenya untuk mengakses features dApps Kami 😇.
    `,
});

export function Providers({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: {
    session: Session;
  };
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider
          getSiweMessageOptions={getSiweMessageOptions}
        >
          <RainbowKitProvider
            theme={darkTheme()}
            chains={chains}
            appInfo={demoAppInfo}
          >
            {mounted && children}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}
