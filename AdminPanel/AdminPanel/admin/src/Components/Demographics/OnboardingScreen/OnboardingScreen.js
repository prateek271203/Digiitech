import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { DeleteOutline } from '@material-ui/icons';
import styles from './OnboardingScreen.module.css';

const CardComponent = () => {
  const cardData = [
    {  title: 'Choose Courses'},
    {  title: 'Register'},
    {  title: 'Add new Courses'},
  ];

  return (
    <div className={styles.container}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          {/*<img src={card.image} alt={card.title} className={styles.cardImage} />*/}
          <div className={styles.cardIcons}>
            <FiEdit className={styles.icon} />
            <DeleteOutline className={styles.icon} />
          </div>
          <div className={styles.cardTitle}>{card.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;

