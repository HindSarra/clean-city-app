import { Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Events from "./pages/public/Events";
import Report from "./pages/public/Report";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
export default function app() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </>
  );
}
