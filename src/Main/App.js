import React, { Fragment } from "react";
import NavBar from "../components/Header-1/NavBar";
import HeroSection from "../components/Top/HeroSection";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import AboutUs from "../components/About-us-1/AboutUs";
import Courses from "../components/Courses-1/Courses";

import ChooseUs from "../components/Choose-us-1/ChooseUs";
import Features from "../components/Features-1/Features";
import Coursess from "../components/Courses-2/Coursess";

import Testinomials from "../components/Testimonial-1/Testinomials";


import Footer from "../components/Footer-1/Footer";
import "./App.css";

const App = () => {
  return (
    <>
   
   <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<HeroSection/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/WhyUs" element={<ChooseUs/>} />
            <Route path="/AllCourses" element={<Courses/>} />
            <Route path="/testinomials"  element={<Testinomials/>} />
            <Route path="/ContactUs" element={<Footer/>} />
            </Routes>
        </div>
      </div>
    </Router>
   
    </>
  );
};

export default App;

