import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// ... imports
import Layout from "./Layout";
import Event from "./Event";
import Competition from "./Competition";
import Merch from "./merch";
import Fest_Timeline from "./Fest_Timeline";
import Timeline from './Timeline';
import Sponsorship from './Sponsorship.js';
import Flowchart from './Flowchart';
import Sponsor from './Sponsor';
import Footer from './Footer';
import Maff from "./maff";
import SC from './SC';
import HT from './HorizontalTimeline.js';
import "./SlideShow.css";
import TextType from "./TextType";
import DomeGallery from "./DomeGallery";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <TextType
                  text={["MAFFICK x TECHNOSEARCH"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text"
                />

                <div style={{ width: "100vw", height: "100vh" }}>
                  <DomeGallery />
                </div>
                <Flowchart />
                <SC />
                <br/>
                <Sponsorship />
                <Footer />
              </>
            }
          />
          <Route path="/Events" element={<Event />} />
          <Route path="/Competitions" element={<Competition />} />{" "}
          <Route path="/Timeline" element={<Fest_Timeline />} />{" "}
          <Route path="/Merch" element={<Merch />} />{" "}
          <Route path="/Sponsor" element={<Sponsor />} />
          <Route path="/Maffick" element={<Maff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
