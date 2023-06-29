import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();
  return (
    <CoursesListWrapper>

      <div className='courses-list-top ms-6'>
          <h2 className="trend">Trending Courses</h2>
        </div>
      <div className='container mt-3'>
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
  .courses-list-top {
    text-align: left;
    margin-left: 100px;
  }
  .courses-list-top h2 {
    font-size: 1.8rem;
  }
  /* Set equal height and width for the cards */
  .card {
    height: 400px;
    width: 400px;
  }
  h2 .trend
  {
    letter-spacing: var(--spacing);
    text-transform: capitalize;

  }

  /* Prevent arrows from moving with the cards */
  .arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

`;

export default CourseList;