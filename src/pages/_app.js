import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Inter, Fondamento } from "next/font/google";
import Navbar from "@/components/navbar";

export const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"] });

const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Save YOUR Crypto",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const lightModeStyle = Object.assign(
  {},
  lightTheme({
    borderRadius: "large",
    fontStack: "system",
    overlayBlur: "small",
  }),
  {
    colors: {
      ...lightTheme().colors,
      connectButtonInnerBackground: "#7bcefd",
      accentColor: "#7bcefd",
      accentColorForeground: "white",
    },
    shadows: {
      ...lightTheme().shadows,
      connectButton: "0px 0px 0px 1px #CBD5E059",
    },
  }
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={lightModeStyle}>
        <div className="bg-white min-h-screen">
          <Navbar className="h-5vh" />
          <Component {...pageProps} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
