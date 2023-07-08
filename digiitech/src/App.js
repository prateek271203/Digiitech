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
import Modal from "./components/Modal";

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
  const isCorporateTraining = location.pathname.includes("corptrain-link");

  return (
    <>
      <Modal />
      <Routes>
        <Route path="courses-link" element={<CoursesPage />} />
        <Route path="corptrain-link" element={<CorporateTraining />} />
      </Routes>
      {!isCoursesPage && !isCorporateTraining && <Navbar />}
      {!isCoursesPage && !isCorporateTraining && <ImageSlider />}
      {!isCoursesPage && !isCorporateTraining && <TrendingCourses />}
      {!isCoursesPage && !isCorporateTraining && <CareerRelatedPrograms />}
      {!isCoursesPage && !isCorporateTraining && <RecentAdditions />}
      {!isCoursesPage && !isCorporateTraining && <TopCategories />}
      {!isCoursesPage && !isCorporateTraining && <ReviewsSection />}
      {!isCoursesPage && !isCorporateTraining && <BlogPostsSection />}
      <Footer />
    </>
  );
}

export default App;
