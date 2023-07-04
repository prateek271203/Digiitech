import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Styling/BlogPostsSection.module.css';
import blogPost1 from '../assets/images/aws_1.jpg';
import blogPost2 from '../assets/images/cat_python.png';
import blogPost3 from '../assets/images/data_science_1.jpg';

const BlogPostsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      image: blogPost1,
      date: 'June 1, 2023',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      image: blogPost2,
      date: 'June 8, 2023',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      image: blogPost3,
      date: 'June 15, 2023',
    },
    {
      id: 4,
      title: 'Blog Post 1',
      image: blogPost1,
      date: 'June 1, 2023',
    },
    {
      id: 5,
      title: 'Blog Post 2',
      image: blogPost2,
      date: 'June 8, 2023',
    },
    {
      id: 6,
      title: 'Blog Post 3',
      image: blogPost3,
      date: 'June 15, 2023',
    },
  ];

  const settings = {
    dots: true,
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
    <div className={styles.blogPostsSection}>
      <h3 className={styles.blogPostsHeading}>Latest Blog Posts</h3>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id}>
            <div className={styles.blogPostCard}>
              <img className={styles.blogPostImage} src={post.image} alt={post.title} />
              <div className={styles.blogPostContent}>
                <h3 className={styles.blogPostTitle}>{post.title}</h3>
                <p className={styles.blogPostDate}>{post.date}</p>
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
  return <div className={`${styles.slickArrow} ${styles.prevArrow}`} onClick={onClick} />;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className={`${styles.slickArrow} ${styles.nextArrow}`} onClick={onClick} />;
};

export default BlogPostsSection;
