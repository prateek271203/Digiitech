import React, { useEffect } from 'react';
import './Reviews.css';
import reviewImage from '../assets/images/review_1.png'
import reviewImage2 from '../assets/images/review_2.jpg'
import reviewImage3 from '../assets/images/review_3.png'
import reviewImage4 from '../assets/images/review_4.png'
import reviewImage5 from '../assets/images/review_5.png'

function Reviews() {
  
  useEffect(() => {
    /* global $ */
    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            loop: false
          }
        }
      });
    });
  }, []);

  
  return (
    <>
    <div className="container">
    <div className="review-page mt-5">
      <h2>Reviews</h2></div>
    <div className="owl-carousel owl-theme">
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage} alt="Reviewer" className="reviewer-image"/>
          <div className="reviewer-details">
            <h4 className="reviewer-name font-weight-bold">Bill 
            James</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage2} alt="" className="reviewer-image" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">Larry Williams</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage3} alt="Reviewer" className="reviewer-image" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">Alex</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage5} alt="Reviewer" className="reviewer-image" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">Parker Smith</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage3} alt="Reviewer" className="reviewer-image" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">Aron Christian</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="review">
        <div className="review-info">
          <img src={reviewImage4} alt="Reviewer" className="reviewer-image" />
          <div className="reviewer-details">
            <h4 className="reviewer-name">Steve Michaels</h4>
            <a href="linkedin-url" className="linkedin-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            <i class="bi bi-quote"></i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
     </div>
    </div>
    <div className="center-btn">
    <button className="btn btn-light">View All Reviews</button>
    </div>
    </div>
    </>
  );
}

export default Reviews;