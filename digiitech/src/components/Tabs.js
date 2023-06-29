import React, { useState } from 'react';
import styled from "styled-components";
import Course from "./Course";
import { PYTHON, WEB_DEVELOPMENT, DATA_SCIENCE, AWS, DESIGN, MARKETING } from "../utils/constants";
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);
  const tabHandler = (category) => {
    setActiveTab(category);
  };

  const filteredCourses = courses.filter(course => course.category === activeTab);
  const chunkedCourses = chunkArray(filteredCourses, 3);

  function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }

  const [currentChunk, setCurrentChunk] = useState(0);
  const totalChunks = chunkedCourses.length;

  {/*const handlePrev = () => {
    setCurrentChunk(prevState => (prevState === 0 ? totalChunks - 1 : prevState - 1));
  };

  const handleNext = () => {
    setCurrentChunk(prevState => (prevState === totalChunks - 1 ? 0 : prevState + 1));
  };*/}

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='d-flex justify-content-left flex-wrap ps-0'>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === PYTHON ? "active" : ""}`} onClick={() => tabHandler(PYTHON)}>Python</button>
          </li>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === WEB_DEVELOPMENT ? "active" : ""}`} onClick={() => tabHandler(WEB_DEVELOPMENT)}>Web Development</button>
          </li>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === DATA_SCIENCE ? "active" : ""}`} onClick={() => tabHandler(DATA_SCIENCE)}>Data Science</button>
          </li>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === AWS ? "active" : ""}`} onClick={() => tabHandler(AWS)}>AWS Certification</button>
          </li>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === DESIGN ? "active" : ""}`} onClick={() => tabHandler(DESIGN)}>Design</button>
          </li>
          <li className='tabs-head-item'>
            <button type="button" className={`tab-btn ${activeTab === MARKETING ? "active" : ""}`} onClick={() => tabHandler(MARKETING)}>Marketing</button>
          </li>
        </ul>

        <div className='tabs-body'>
          <div className="row">
            {chunkedCourses.length > 0 &&
              chunkedCourses[currentChunk].map(course => (
                <div className='col-lg-4' key={course.id}>
                  <Course {...course} />
                </div>
              ))}
          </div>
          {/*{chunkedCourses.length > 1 && (
            <div className='carousel-controls'>
              <button type='button' className='carousel-control' onClick={handlePrev}>
                &lt;
              </button>
              <button type='button' className='carousel-control' onClick={handleNext}>
                &gt;
              </button>
          </div>}
          )}*/}
        </div>
      </div>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
.tabs{
  margin-top: 16px;

  .tabs-head-item button{
    border: 1px solid rgba(0, 0, 0, 0.7);
    padding: 10px 13px;
    margin-right: 3px;
    margin-left:0px;
    transition: var(--transition);
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;

    &:hover{
      background-color: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .tabs-body{
    margin-top: 32px;
  }

  @media screen and (min-width: 992px){
    .tabs-body{
      position: relative;
      overflow-x: hidden;
      .row {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 0.3s ease-in-out;
      }
    }

    .carousel-controls {
      display: flex;
      justify-content: space-between;
      align-items: center; /* Align arrows vertically at center */
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin-top: -30px; /* Adjust the margin to position arrows above center */
      button {
        font-size: 24px;
        cursor: pointer;
        color: rgb(255, 255, 255);
        background-color: #000000;
        width: 40px;
        height: 40px;
        padding: 8px 20px;
        border-radius: 50%;
        border: 0;
        display: flex;
        justify-content:center;
        align-items: center;
      }
    }
  }
}
`;

export default Tabs;
