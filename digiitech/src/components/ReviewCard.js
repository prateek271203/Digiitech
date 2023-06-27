import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  const { name, position, content } = review;

  return (
    <div className="review-card">
      <h3 className="review-name">{name}</h3>
      <p className="review-position">{position}</p>
      <p className="review-content">{content}</p>
    </div>
  );
};

export default ReviewCard;
