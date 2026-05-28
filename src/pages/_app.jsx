import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <Component {...pageProps} />
      <Analytics />
    </Head>
  );
}
