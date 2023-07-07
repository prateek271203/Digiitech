import React from "react";
import styles from "./Styling/CareerRelatedPrograms.module.css";
import { Card, Carousel } from "react-bootstrap";
import coursesData from "../utils/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function CareerRelatedPrograms() {
  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    return (
      <div className={styles["star-rating"]}>
        {[...Array(filledStars)].map((_, index) => (
          <i key={index} className={`${styles["star-icon"]} fas fa-star`} style={{ color: "yellow" }} />
        ))}
        {halfStar && <i className={`${styles["star-icon"]} fas fa-star-half`} style={{ color: "yellow" }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={index} className={`${styles["star-icon"]} far fa-star`} style={{ color: "yellow" }} />
        ))}
        <span className={styles["rating-value"]}>{rating}</span>
      </div>
    );
  };
  // Custom control component for previous button
  const CustomPrevButton = ({ onClick }) => (
  <div className={styles["carousel-control-prev"]} onClick={onClick}>
    <BiChevronLeft className={styles["carousel-control-icon"]} size={31} />
  </div>
);
// Custom control component for next button
const CustomNextButton = ({ onClick }) => (
  <div className={styles["carousel-control-next"]} onClick={onClick}>
    <BiChevronRight className={styles["carousel-control-icon"]} size={31}/>
  </div>
);

  return (
    <div className={styles["career-related-programs"]}>
      <h3 className={styles["career-related-programs-heading"]}>
        Career Related Programs
      </h3>
      <div className={styles["carousel-container"]}>
        <Carousel
          className={styles["course-carousel"]}
          indicators={false}
          interval={null}
          prevIcon={<CustomPrevButton />}
          nextIcon={<CustomNextButton />}
        >
          {coursesData.reduce((chunks, course, index) => {
            const chunkIndex = Math.floor(index / 3);
            if (!chunks[chunkIndex]) {
              chunks[chunkIndex] = [];
            }
            chunks[chunkIndex].push(course);
            return chunks;
          }, []).map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div className={styles["card-row"]}>
                {chunk.map((course, cardIndex) => (
                  <Card
                    key={cardIndex}
                    className={`border-0 shadow rounded-0 ${styles["card-container"]}`}
                  >
                    <Card.Img
                      variant="top"
                      src={course.image}
                      className={`rounded-0 ${styles["card-image"]}`}
                    />
                    <Card.Body>
                      <Card.Title className={styles["card-title"]}>
                        {course.course_name}
                      </Card.Title>
                      {renderStarRating(course.rating_star)}
                      <Card.Text className={styles["card-description"]}>
                        {course.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
                {/* Add empty cards to ensure equal spacing */}
                {chunk.length < 3 &&
                  [...Array(3 - chunk.length)].map((_, index) => (
                    <Card
                      key={`empty-${index}`}
                      className={`${styles["card-container"]} ${styles["empty-card"]}`}
                    />
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CareerRelatedPrograms;

