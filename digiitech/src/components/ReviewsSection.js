import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewCard.css';
import reviews1 from '../assets/images/reviews1.png';
import reviews2 from '../assets/images/reviews2.jpeg';
import reviews3 from '../assets/images/reviews3.jpeg';


const ReviewsSection = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius leo vel arcu tincidunt tincidunt.',
      image: reviews1
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      content: 'Nullam suscipit urna at tortor semper tincidunt. Morbi dignissim elit eget ultrices vestibulum.',
      image: reviews2
    },
    {
      id: 3,
      name: 'Mark Johnson',
      position: 'Data Analyst',
      content: 'Fusce quis mauris at purus consectetur venenatis. Etiam nec mauris id lorem euismod ultrices.',
      image: reviews3
    },
    // Add more reviews as needed
    {
      id: 4,
      name: 'John Doe1',
      position: 'Software Engineer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius leo vel arcu tincidunt tincidunt.',
      image: reviews1
    },
    {
      id: 5,
      name: 'Jane Smith2',
      position: 'Product Manager',
      content: 'Nullam suscipit urna at tortor semper tincidunt. Morbi dignissim elit eget ultrices vestibulum.',
      image: reviews2
    },
    {
      id: 6,
      name: 'Mark Johnson3',
      position: 'Data Analyst',
      content: 'Fusce quis mauris at purus consectetur venenatis. Etiam nec mauris id lorem euismod ultrices.',
      image: reviews3
    },
  ];
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
    <div className="review-slider" style={{ marginTop: '40px'}}>
      <h2 className="review-heading">Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="card">
            <img className="card-img-top" src={review.image} alt={review.name} />
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.position}</p>
                <p className="card-text review-content">{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow prev-arrow" onClick={onClick} />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow next-arrow" onClick={onClick} />;
};


export default ReviewsSection;
