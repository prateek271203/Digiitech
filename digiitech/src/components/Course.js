import React from "react";
//import {Link} from "react-router-dom";
import StarRating from "../components/StarRating";

const Course = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    rating_count,
    rating_star /*category*/,
  } = props;

  return (

        <div className="container ">
          <div className="row">
            <div className="col-4">
          <div className="card mb-3" style={{width: '25rem'}}>
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img className="card-img-top" src={image} alt={course_name} height={'300px'} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{course_name}</h5>
              <span className="item-creator">{creator}</span>
              <div className="item-rating flex">
                <span className="rating-star-val">{rating_star}</span>
                <StarRating rating_star={rating_star} />
                <span className="rating-count">({rating_count})</span>
              </div>
              <div className="item-price">
                <span className="item-price-old">${actual_price}</span>
              </div>
            </div>
            <div className="card-footer">
              <a class="btn btn-link" href={`/courses/${id}`} role="button">
                See details
              </a>
            </div>
          </div>
          </div>
          </div>
        </div>
  );
};

export default Course;
