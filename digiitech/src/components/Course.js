import React from 'react';
//import {Link} from "react-router-dom";
import StarRating from "../components/StarRating";


const Course = (props) => {
  const {id, image, course_name, creator, actual_price, rating_count, rating_star, /*category*/} = props;

  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
    <div class="card-deck">
        <img class="card-img-top" src = {image} alt = {course_name} />
      <div className='card-body'>
        <h5 className='card-title'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star = {rating_star} />
          <span className='rating-count'>({rating_count})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-old'>${actual_price}</span>
        </div>
      </div>
      <a class="btn btn-link" href= {`/courses/${id}`} role="button">See details</a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Course