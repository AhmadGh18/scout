import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TopNavBar from "./Components/TopNavBar";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <TopNavBar />
      <Navbar /> */}
      <Home />
    </>
  );
}

export default App;
