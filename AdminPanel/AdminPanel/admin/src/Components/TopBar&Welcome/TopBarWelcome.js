import React from 'react';
import WelcomeBackground from '../images/WelcomeBackground.jpg';
import reviews1 from '../images/reviews1.png';

import { Typography, InputBase, Badge } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
import styles from './TopBarWelcome.module.css';

const TopBarWelcome = ({ name, position }) => {
  return (
    <div className={styles.topBarWelcome}>
      <div className={styles.topBar}>
        <div className={styles.searchBox}>
          <InputBase
            placeholder="Search..."
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
          />
        </div>
        <Badge color="secondary">
          <Notifications />
        </Badge>
        <div className={styles.userDp}>
          <img src={reviews1} alt="User DP" className={styles.userDpImage} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.userInfoText}>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="caption">{position}</Typography>
          </div>
        </div>
      </div>
      <div className={styles.welcomeContainer} style={{ backgroundImage: `url(${WelcomeBackground})` }}>
        <div className={styles.welcomeContent}>
          <Typography variant="h6" className={styles.welcomeHeading}>
            Hello {name}!
          </Typography>
          <Typography variant="body1" className={styles.welcomeText}>
            We are on a mission to help admin to CRUD.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TopBarWelcome;
