import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
