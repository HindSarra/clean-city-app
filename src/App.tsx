import { Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Events from "./pages/public/Events";
import Report from "./pages/public/Report";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SignIn from "./pages/authentification/SignIn";
import SignUp from "./pages/authentification/SignUp";
export default function app() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/report" element={<Report />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}
