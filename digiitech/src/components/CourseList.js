import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>

      <div className='container mt-3'>
        <div className='courses-list-top'>
          <h2>Trending Courses</h2>
        </div>
            <Tabs 
            courses = {courses} />
      </div>
              
    </CoursesListWrapper>
  );
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .container-fluid {
    margin-left: 50px !important;
    margin-right: 50px !important;
  }
  .courses-list-top p{
    
    font-size: 1.8rem;
  }
`;

export default CourseList;