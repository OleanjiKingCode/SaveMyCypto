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

const { chains, publicClient } = configureChains(
  [mainnet, polygon],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Save YOUR Crypto",
  projectId: "YOUR_PROJECT_ID",
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
    borderRadius: "small",
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
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
