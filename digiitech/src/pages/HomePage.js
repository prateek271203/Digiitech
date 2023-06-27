import React from 'react';
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import CareerRelatedProgramsList from "../components/CareerRelatedProgramsList";
import ReviewsSection from "../components/ReviewsSection";
import BlogPostsSection from "../components/BlogPostsSection";

const HomePage = () => {
  return (
    <div className='holder'>
      <CoursesList />
      <CareerRelatedProgramsList />
      <CategoriesList />
      <ReviewsSection />
      <BlogPostsSection />
    </div>
  )
}

export default HomePage