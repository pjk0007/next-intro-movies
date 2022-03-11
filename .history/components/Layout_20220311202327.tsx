import { AppProps } from "next/app";
import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
