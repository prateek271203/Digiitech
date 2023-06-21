import React from 'react';
//import {Link} from "react-router-dom";
import StarRating from "../components/StarRating";


const CareerRelatedPrograms = (props) => {
  const {id, image, course_name, creator, actual_price, rating_count, rating_star, /*category*/} = props;

  return (
             <div class="card-deck">
                 <div className='item-img'>
                      <img class="card-img-top" src = {image} alt = {course_name} />
                  </div>
                  <div className='card-body'>
                       <h5 className='card-title'>{course_name}</h5>
                       <div class='owl-carousel'>
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
           <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
          </div>
        
  )
}

export default CareerRelatedPrograms