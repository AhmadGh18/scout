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
import WhoArewe from "./Components/whoAreWelinks/WhoArewe";
import Ourview from "./Components/whoAreWelinks/Ourview";
import PrmoiseAndlaw from "./Components/whoAreWelinks/PrmoiseAndlaw";
import ScoutStory from "./Components/whoAreWelinks/ScoutStory";
import HistoryAboutUs from "./Components/whoAreWelinks/HistoryAboutUs";
import GenralLeaders from "./Components/Commission/GenralLeaders";
import Leardrs from "./Components/Leardrs";
import GeneralCommission from "./Components/Commission/GeneralCommission";
import GeneraalAuthority from "./Components/Commission/GeneraalAuthority";
import Administrative from "./Components/Commission/Administrative";
import Programms from "./Components/Programms";
import Jawwala from "./Components/Programs/Jawwala";
import Kashafa from "./Components/Programs/Kashafa";
import Ashbal from "./Components/Programs/Ashbal";
import Footer from "./Components/Footer";
import Ournew from "./Components/Ournew";
import Governorate from "./Components/Governorate";
import MajorsCommissions from "./Components/MajorsCommissions";
import Media from "./Components/Media";
import Projects from "./Components/Projects";
import Videos from "./Components/Videos";

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
        <Route path="/من-نحن" element={<WhoArewe />}>
          <Route path="الرؤية-والرسالة-والقيم/" element={<Ourview />} />
          <Route path="الوعد-و-القانون/" element={<PrmoiseAndlaw />} />
          <Route path="قصة-الكشفية/" element={<ScoutStory />} />
          <Route path="نبدة-عن-تاريخ-الجمعية" element={<HistoryAboutUs />} />
        </Route>

        <Route path="/هيكلية-الجمعية" element={<Leardrs />}>
          <Route path="القيادة-العامة/" element={<GenralLeaders />} />
          <Route path="المفوضية-العامة/" element={<GeneralCommission />} />
          <Route path="الهيئة-العامة/" element={<GeneraalAuthority />} />
          <Route path="الهيكلية-الإدارية/" element={<Administrative />} />
        </Route>

        <Route path="/برامجنا" element={<Programms />}>
          <Route path="حلقة-الجوالة-دليلات/" element={<Jawwala />} />
          <Route path="حلقة-الكشافة-مرشدات/" element={<Kashafa />} />
          <Route path="حلقة-الأشبال-الزهرات/" element={<Ashbal />} />
        </Route>
        <Route path="/اخبارنا">
          <Route path="القيادة-العامة/" element={<Ournew />} />
          <Route path="المفوضية -العامة/" />
          <Route path="مفوضيات -المناطق/" />
        </Route>
        <Route path="/مفوضيات-المناطق" element={<Governorate />}>
          <Route path="مفوضية-بيروت/" />
          <Route path="مفوضية-الشمال/" />
          <Route path="مفوضية-الجنوب/" />
          <Route path="مفوضية-البقاع/" />
          <Route path="مفوضية-جبل-لبنان/" />
          <Route path="مفوضية-مرجعيون-حاصبيا/" />
        </Route>
        <Route path="/مفوضيات-الاحتصاص" element={<MajorsCommissions />}>
          <Route path="مفوضية-الشؤون-المالية"></Route>
        </Route>
        <Route path="/ميديا" element={<Media />}>
          <Route path="صور" element={<Allpictures />} />
          <Route path="وثائق" element={<Documents />} />
          <Route path="مشاريع" element={<Project />} />
          <Route path="الفيديوهات" element={<Videos />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
