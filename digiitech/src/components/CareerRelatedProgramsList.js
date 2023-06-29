import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
//import { course_images } from '../utils/images';
//import courses from '../utils/data';
//import Course from "./Course";
//import CareerRelatedPrograms from "./CareerRelatedPrograms";
import { useCoursesContext } from "../context/courses_context";

const CareerRelatedProgramsList = () => {
  const { courses } = useCoursesContext();
  return (
    <CoursesListWrapper>
        <div className="courses-list-top">
          <h2>Career Related Programs</h2>
        </div>
      <div className="container">

        <div className="Courses-list-grid">{<Tabs courses={courses} />}</div>
      </div>
    </CoursesListWrapper>
    
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top  {
    text-align:left;
    margin-left:100px;
  }
  .courses-list-top h2{
    font-size: 1.8rem
  }
  .container-fluid {
    margin-left: 50px !important;
    margin-right: 50px !important;
  }
  .card{
    height: 400px;
    width: 400px;
  }
`;

export default CareerRelatedProgramsList;
