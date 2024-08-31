import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TopNavBar from "./Components/TopNavBar";
import Home from "./Components/Home";
import { Route, Router, Routes } from "react-router-dom";
import Allpictures from "./Components/Projects/Allpictures";
import Designs from "./Components/Projects/Designs";
import Documents from "./Components/Projects/Documents";
import News from "./Components/Projects/News";
import Project from "./Components/Projects/Project";
import Trials from "./Components/Projects/Trials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/صور" element={<Allpictures />}></Route>
          <Route path="/تصاميم" element={<Designs />}></Route>
          <Route path="/وثائق" element={<Documents />}></Route>
          <Route path="/نشرة" element={<News />}></Route>
          <Route path="/مشاريع" element={<Project />}></Route>
          <Route path="/تجارب" element={<Trials />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
