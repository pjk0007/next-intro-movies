import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <style jsx>{`
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
