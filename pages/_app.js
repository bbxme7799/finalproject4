import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import { createConfig, configureChains, WagmiConfig } from "wagmi";
// import { publicProvider } from "wagmi/providers/public";
// import { mainnet } from "wagmi/chains";

// const { publicClient, webSocketPublicClient } = configureChains(
//   [mainnet],
//   [publicProvider()]
// );

// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   webSocketPublicClient,
// });

function MyApp({ Component, pageProps }) {
  return (
    // <WagmiConfig config={config}>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    // </WagmiConfig>
  );
}
export default MyApp;
