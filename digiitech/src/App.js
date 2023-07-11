import React from "react";
import "./App.css";
import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import TrendingCourses from "./components/TrendingCourses";
import CareerRelatedPrograms from "./components/CareerRelatedPrograms";
import RecentAdditions from "./components/RecentAdditions";
import TopCategories from "./components/TopCategories";
import ReviewsSection from "./components/ReviewsSection";
import BlogPostsSection from "./components/BlogPostsSection";
import Footer from "./components/Footer";
import CoursesPage from "./components/CoursesPage";
import CorporateTraining from "./components/CorporateTraining";

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
       <Routes>
        <Route path="corptrain-link" element={<CorporateTraining />} />
        <Route path="courses-link" element={<CoursesPage />} />
      </Routes>
      {!isCoursesPage && <Navbar />}
      {!isCoursesPage && <ImageSlider />}
      <TrendingCourses />
      <CareerRelatedPrograms />
      <RecentAdditions />
      <TopCategories />
      <ReviewsSection />
      <BlogPostsSection />
      <Footer />
    </>
  );
}

export default App;
