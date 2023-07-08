import React, { useState, useEffect, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo1 from '../images/logo1.png';
import RightContainer from '../images/RightContainer.png';
import styles from './ForgetPasswordForm.module.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(''));
  const [verificationError, setVerificationError] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [filledInputCount, setFilledInputCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState(30);
  const [isResendDisabled, setResendDisabled] = useState(true);
  const verificationCodeInputRefs = useMemo(
    () => Array(6).fill().map(() => React.createRef(null)),
    []
  );
  const history = useHistory();

  const emailArrays = [
    ['pranavbhargava.1@gmail.com', 'Pranav'],
    ['admin1@example.com', 'Jane'],
    ['admin2@example.com', 'Doe'],
    ['admin3@example.com', 'Test'],
    ['admin4@example.com', 'User'],
  ];

  useEffect(() => {
    let interval = null;
    if (remainingTime > 0 && showVerification && !verifying) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setResendDisabled(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [remainingTime, showVerification, verifying]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handleVerificationCodeChange = (e, index) => {
    const value = e.target.value;
    const onlyDigits = /^\d*$/;

    if (onlyDigits.test(value)) {
      const updatedValue = [...verificationCode];
      updatedValue[index] = value;
      setVerificationCode(updatedValue);
      setFilledInputCount(updatedValue.filter((code) => code !== '').length);

      if (value.length === 1 && index < verificationCode.length - 1) {
        const nextIndex = index + 1;
        const nextInput = verificationCodeInputRefs[nextIndex].current;
        nextInput.focus();
      } else if (value.length === 0 && index > 0) {
        const prevIndex = index - 1;
        const prevInput = verificationCodeInputRefs[prevIndex].current;
        prevInput.focus();
      }
    } else {
      const updatedValue = [...verificationCode];
      updatedValue[index] = '';
      setVerificationCode(updatedValue);
    }

    setVerificationError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchedEmail = emailArrays.find(
      (arr) => arr[0] === email.trim().toLowerCase()
    );

    if (matchedEmail) {
      setShowVerification(true);
    } else {
      setErrorMessage('Invalid email address');
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();

    // Simulating OTP verification with a delay
    setVerifying(true);
    setTimeout(() => {
      if (parseInt(verificationCode.join('')) === 156272) {
        // OTP verified, navigate to NewPasswordForm
        history.push('/newPassword');
      } else {
        setVerificationError(true);
        setVerifying(false);
      }
    }, 2000);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP');
    setRemainingTime(30);
    setResendDisabled(true);
    setTimeout(() => {
      setResendDisabled(false);
    }, 30000);
  };

  const handleEditClick = () => {
    setShowVerification(false);
    setRemainingTime(30);
    setResendDisabled(true);
    window.location.reload();
  };

  const isInputComplete = filledInputCount === verificationCode.length;
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const seconds = (remainingTime % 60).toString().padStart(2, '0');
  const timerText = `${minutes}:${seconds}`;

  return (
    <div className={styles.pageContainer}>
      {/*<img src={TopMargin} alt="Top Margin" className={styles.topImage} />*/}
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo1} alt="Logo" />
          </div>
          {!showVerification ? (
            <>
              <h2 className={styles.heading}>Forgot Password</h2>
              <p className={styles.text}>
                Enter your email address to receive a password reset link.
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errorMessage && (
                  <div className={styles.errorMessage}>{errorMessage}</div>
                )}
                <button type="submit">Reset Password</button>
              </form>
              <Link to="/" className={styles.linkButton}>
                Back to SignIn
              </Link>
            </>
          ) : (
            <>
              <h2 className={`${styles.heading} ${styles.bold}`}>
                Enter your verification code
              </h2>
              <p className={styles.text}>
                We have sent an OTP on <strong>{email}</strong>.{' '}
                <Link
                  to="/forgotPassword"
                  className={styles.linkButton}
                  onClick={handleEditClick}
                >
                  EDIT.
                </Link>
              </p>
              <form className={styles.form} onSubmit={handleVerifyOTP}>
                <div className={styles.otpContainer}>
                  {verificationCode.map((code, index) => (
                    <input
                      key={index}
                      ref={verificationCodeInputRefs[index]}
                      className={styles.input}
                      type="text"
                      maxLength={1}
                      value={code}
                      onChange={(e) => handleVerificationCodeChange(e, index)}
                    />
                  ))}
                </div>
                {verificationError && (
                  <div className={styles.errorMessage}>Invalid OTP</div>
                )}
                <p className={styles.text}>
                  Receiving OTP in {timerText} sec
                </p>
                {verifying ? (
                  <button type="button" disabled>
                    Verifying...
                    <span className={styles.loader} />
                  </button>
                ) : (
                  <button type="submit" disabled={!isInputComplete}>
                    Verify
                  </button>
                )}
              </form>
              <Link
                to="#"
                className={styles.linkButton}
                onClick={handleResendOTP}
                disabled={isResendDisabled}
              >
                Resend OTP
              </Link>
            </>
          )}
        </div>
        <div className={styles.rightContainer}>
          <img
            src={RightContainer}
            alt="Right Container"
            className={styles.rightImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
