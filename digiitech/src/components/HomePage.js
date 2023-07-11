import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import TrendingCourses from "./TrendingCourses";
import CareerRelatedPrograms from "./CareerRelatedPrograms";
import RecentAdditions from "./RecentAdditions";
import TopCategories from "./TopCategories";
import ReviewsSection from "./ReviewsSection";
import BlogPostsSection from "./BlogPostsSection";
import Footer from "./Footer";

function HomePage ()
{
    return (
    <>
      <Navbar />
      <ImageSlider />
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

export default HomePage;