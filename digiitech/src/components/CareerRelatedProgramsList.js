import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
//import { course_images } from '../utils/images';
//import courses from '../utils/data';
//import Course from "./Course";
//import CareerRelatedPrograms from "./CareerRelatedPrograms";
import { useCoursesContext } from '../context/courses_context';

const CareerRelatedProgramsList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>Career Related Programs</h2>
        </div>
        <div class="Courses-list-grid">
        {
          <Tabs courses = {courses} />
        }
      </div>
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CareerRelatedProgramsList