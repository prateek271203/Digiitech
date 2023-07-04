import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Styling/ReviewsSection.module.css';
import reviews1 from '../assets/images/reviews1.png';
import reviews2 from '../assets/images/reviews2.jpeg';
import reviews3 from '../assets/images/reviews3.jpeg';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius leo vel arcu tincidunt tincidunt.',
      rating: 4,
      image: reviews1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      content: 'DigiiTech has significantly streamlined our educational institution\'s operations. The administrative dashboard is intuitive and allows us to manage students, courses, and progress efficiently. The customer support team is responsive and addresses our queries promptly. We are satisfied with the overall experience and look forward to exploring more features.',
      image: reviews2,
      rating: 3.8
    },
    {
      id: 3,
      name: 'Mark Johnson',
      position: 'Data Analyst',
      content: 'DigiiTech has been a valuable resource throughout my college years. The video lectures and study materials have been instrumental in clarifying complex concepts. The discussion forums allow me to connect with peers and exchange ideas. The mobile app is a convenient way to access content on the go. DigiiTech has been my go-to platform for academic support.',
      image: reviews3,
      rating: 4.2
    },
    // Add more reviews as needed
    {
      id: 4,
      name: 'John Doe1',
      position: 'Software Engineer',
      content: 'DigiiTech has been a blessing for our homeschooling journey. The platform offers a wide range of subjects and grade levels, which gives us the flexibility to customize our curriculum. The interactive lessons keep my kids engaged, and they are always excited to learn. We appreciate the comprehensive learning resources and the progress reports. DigiiTech is an excellent choice for homeschooling families.',
      image: reviews1,
      rating: 4.0
    },
    {
      id: 5,
      name: 'Jane Smith2',
      position: 'Product Manager',
      content: 'DigiiTech has been a blessing for our homeschooling journey. The platform offers a wide range of subjects and grade levels, which gives us the flexibility to customize our curriculum. The interactive lessons keep my kids engaged, and they are always excited to learn. We appreciate the comprehensive learning resources and the progress reports. DigiiTech is an excellent choice for homeschooling families.',
      image: reviews2,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Mark Johnson3',
      position: 'Data Analyst',
      content: 'DigiiTech has been a blessing for our homeschooling journey. The platform offers a wide range of subjects and grade levels, which gives us the flexibility to customize our curriculum. The interactive lessons keep my kids engaged, and they are always excited to learn. We appreciate the comprehensive learning resources and the progress reports. DigiiTech is an excellent choice for homeschooling families.',
      image: reviews3,
      rating: 3.5
    },
  ];
  const [expandedReviews, setExpandedReviews] = useState([]);

  const handleExpandReview = (reviewId) => {
    if (expandedReviews.includes(reviewId)) {
      setExpandedReviews(expandedReviews.filter((id) => id !== reviewId));
    } else {
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? styles['star-active'] : styles['star-inactive'];
      stars.push(<span key={i} className={`${styles['star']} ${starClass}`}>&#9733;</span>);
    }
    return stars;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={styles['review-slider']} style={{ marginTop: '40px' }}>
      <h3 className="review-heading">Reviews</h3>
      <Slider {...settings}>
        {reviews.map((review) => {
          const isExpanded = expandedReviews.includes(review.id);
          const reviewTextClass = isExpanded ? `${styles['review-text']} ${styles['expanded']}` : styles['review-text'];

          return (
            <div key={review.id}>
              <div className={styles['review-card']}>
                <div className={styles['review-image']}>
                  <img src={review.image} alt={review.name} />
                </div>
                <div className={styles['review-content']}>
                  <h5 className={styles['review-name']}>{review.name}</h5>
                  <div className={styles['rating-container']}>
                    {renderRatingStars(review.rating)}
                  </div>
                  <p className={styles['review-position']}>{review.position}</p>
                  <p className={reviewTextClass}>
                    {isExpanded ? review.content : `${review.content.split(' ').slice(0, 10).join(' ')}...`}
                  </p>
                  {review.content.split(' ').length > 10 && (
                    <button
                      className={styles['view-more']}
                      onClick={() => handleExpandReview(review.id)}
                    >
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className={`${styles['slick-arrow']} ${styles['prev-arrow']}`} onClick={onClick} />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className={`${styles['slick-arrow']} ${styles['next-arrow']}`} onClick={onClick} />;
};

export default ReviewsSection;