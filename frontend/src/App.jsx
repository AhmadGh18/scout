import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TopNavBar from "./Components/TopNavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNavBar />
      <Navbar />
    </>
  );
}

export default App;
