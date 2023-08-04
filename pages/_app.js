import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "../styles/fonts.css";

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
