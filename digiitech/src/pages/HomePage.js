import React from 'react';
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import CareerRelatedProgramsList from "../components/CareerRelatedProgramsList";

const HomePage = () => {
  return (
    <div className='holder'>
      <CoursesList />
      <CareerRelatedProgramsList />
      <CategoriesList />
    </div>
  )
}

export default HomePage