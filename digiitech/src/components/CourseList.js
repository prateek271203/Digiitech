import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
<<<<<<< HEAD
      <div className='courses-list-top'>
          <h2 className="trend">Trending Courses</h2>
=======

      <div className='container mt-3'>
        <div className='courses-list-top'>
          <h2>Trending Courses</h2>
>>>>>>> 47cc0b8abac45800505056f352841c9e0d9b35fc
        </div>
      <div className='container fluid mt-3'>
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

  /* Prevent arrows from moving with the cards */
  .arrow-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

`;

export default CourseList;