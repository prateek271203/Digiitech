import React from "react";
import styles from "./Styling/TrendingCourses.module.css";
import { Tab, Tabs, Card, Carousel } from "react-bootstrap";
import coursesData from "../utils/data";

const categories = [
  "All",
  "AWS",
  "Data Science",
  "Design",
  "Marketing",
  "Python",
  "Web Development",
];

function renderStarRating(rating) {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className={styles["star-rating"]}>
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className={`bi bi-star-fill ${styles["star-icon"]}`}></i>
      ))}
      {halfStar && (
        <i className={`bi bi-star-half ${styles["star-icon"]}`}></i>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className={`bi bi-star ${styles["star-icon-empty"]}`}></i>
      ))}
      <span className={styles["rating-value"]}>{rating}</span>
    </div>
  );
}

function TrendingCourses() {
  return (
    <div className={styles["trending-courses"]}>
      <h3 className={styles["trending-courses-heading"]}>Trending Courses</h3>
      <Tabs defaultActiveKey="All" id="course-tabs">
        {categories.map((category, index) => (
          <Tab key={index} eventKey={category} title={category}>
            <div className={styles["carousel-container"]}>
              <Carousel
                className={styles["course-carousel"]}
                indicators={false}
                interval={null}
              >
                {coursesData
                  .filter(
                    (course) =>
                      category.toLowerCase() === "all" || // Case-insensitive comparison
                      course.category.toLowerCase() === category.toLowerCase()
                  )
                  .reduce((chunks, course, index) => {
                    const chunkIndex = Math.floor(index / 4);
                    if (!chunks[chunkIndex]) {
                      chunks[chunkIndex] = [];
                    }
                    chunks[chunkIndex].push(course);
                    return chunks;
                  }, [])
                  .map((chunk, chunkIndex) => (
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
                              {/*<Card.Text className={styles["card-description"]}>
                                {course.description}
                              </Card.Text>*/}
                            </Card.Body>
                          </Card>
                        ))}
                        {/* Add empty cards to ensure equal spacing */}
                        {chunk.length < 4 &&
                          [...Array(4 - chunk.length)].map((_, index) => (
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
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default TrendingCourses;

