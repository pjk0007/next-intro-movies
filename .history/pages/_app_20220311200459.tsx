import { AppProps } from "next/app";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
