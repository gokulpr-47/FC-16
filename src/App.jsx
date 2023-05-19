import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
// import LandingPage from "./components/LandingPage/LandingPage";
// import AboutUs from "./components/Aboutus/AboutUs";
import UploadPage from "./components/UploadPage/UploadPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<UploadPage />} />
        {/* <Route path="/resource" element={<Resource/>} /> */}
        {/* <Route path="/about" element={<AboutUs />} /> */}
      </Routes>
    </>
  );
}

export default App;
