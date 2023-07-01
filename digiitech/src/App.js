import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, SingleCourse, Courses } from "./pages";
import CoursesPage from "./components/CoursesPage";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
//import Cards from "./components/Cards";
import Modal from "./components/Modal";
import TopCategories from "./components/TopCategories";
//import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isCoursesPage = location.pathname.includes("courses-link");

  return (
    <>
      {!isCoursesPage && <Navbar />}
      {!isCoursesPage && <ImageSlider />}
      {/*{!isCoursesPage && <Cards />}*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="courses-link" element={<CoursesPage />} />
        <Route path="/categories-link" element={<TopCategories />} />
        {/*<Route path="/reviews-link" element={<Reviews />} />*/}
      </Routes>
      <Modal/>
      <TopCategories/>
      {/*<Reviews/>*/}
      <Footer/>
    </>
  );
}

export default App;
