import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaLock } from 'react-icons/fa'; // Import the FaLock icon from react-icons
import logo1 from '../images/logo1.png';
import RightContainer from '../images/RightContainer.png';
import styles from './NewPasswordForm.module.css';

const NewPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!isPasswordValid(newPassword)) {
      setErrorMessage('Invalid password. Password should contain at least one lowercase letter, one uppercase letter, and one special character (*, &, #, or @).');
      return;
    }

    history.push('/');
  };

  const isPasswordValid = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[*&#@]/;

    return (
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  return (
    <div className={styles.pageContainer}>
      {/*<img src={TopMargin} alt="Top Margin" className={styles.topImage} />*/}
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <img src={logo1} alt="Logo" className={styles.logo} />
          </div>
          <h2 className={styles.heading}>New Password</h2>
          <p className={styles.text}>Enter New Password for the admin panel</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <FaLock className={styles.lockIcon} /> {/* Add FaLock icon */}
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              <div className={styles.inputBorder} />
            </div>
            <div className={styles.inputContainer}>
              <FaLock className={styles.lockIcon} /> {/* Add FaLock icon */}
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <div className={styles.inputBorder} />
            </div>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.rightContainer}>
          <img src={RightContainer} alt="Right Container" className={styles.rightImage} />
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;




