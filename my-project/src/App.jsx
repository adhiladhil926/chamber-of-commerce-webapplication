
import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Membership from "./components/Membership";
import Contact from "./components/Contact"; 
import Gallery from "./components/Gallery";
import Activity from "./components/Activity";
import Cmsi from "./components/Cmsi";
// import MembershipForm from "./components/Membership-form";
// import PaymentOptions from "./components/PaymentOption";
import Vision from "./components/Vision";

function App() {
  // const [showSplash, setShowSplash] = useState(true);

  // if (showSplash) {
  //   return <Splash onEnter={() => setShowSplash(false)} />;
  // }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/membership" element={<Membership />} />
       {/* <Route path="/membership-form" element={<MembershipForm />} /> */}
            {/* <Route path="/payment-options" element={<PaymentOptions />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>} /> 
        <Route path="/cmsi" element={<Cmsi/>} /> 
          <Route path="/vision" element={<Vision/>} /> 
         <Route path="/activity" element={<Activity/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
