import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home"></Seo>
      <h1 className="active">Home</h1>
    </div>
  );
}
