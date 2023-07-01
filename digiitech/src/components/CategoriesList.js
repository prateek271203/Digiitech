import React from 'react';
import styled from "styled-components";
import { categories_images } from '../utils/images';
import Category from "./Category";
import { useCoursesContext } from '../context/courses_context';

const CategoriesList = () => {
  const {categories} = useCoursesContext();
  return (
    <CategoriesListWrapper>
      <div className='container cl d-flex'>
        <div className='row categories-list-top'>
          <h2>Recent Additions</h2>
        </div>
        <div className='row categories-list'>
          <div className="col-3">
          {
            categories.map((category, idx) => {
              return (
                <Category image = {categories_images[idx]} category = {category} key = {idx} />
              )
            })
          }
          </div>
        </div>
      </div>
    </CategoriesListWrapper>
  )
}

const CategoriesListWrapper = styled.div`
   padding: 40px;
  .categories-list-top{
    margin-bottom: 32px;
  }
  .container .cl {
    margin-left: 50px !important;
    margin-right: 100px;
    
  }
  .categories-list{
    gap: 32px;
  }

  }
`;

export default CategoriesList