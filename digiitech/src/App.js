import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// AdminPanel
import Authentication from "./AdminPanel/Components/Authentication/Authentication";
import ForgetPasswordForm from "./AdminPanel/Components/ForgetPassword/ForgetPasswordForm";
import NewPasswordForm from "./AdminPanel/Components/NewPasswordScreen/NewPasswordForm";
import Dashboard from "./AdminPanel/Components/Dashboard/Dashboard";
// HomePage
import HomePage from "./components/HomePage";
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
