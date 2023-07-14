import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';
import logo from '../assets/LogoTransparent.png';
import TopMargin from '../assets/TopMargin.png';
import profileImage from '../assets/profileImage.png';
import rightContainerImage from '../assets/RightContainer.png';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const admins = [
    {
      email: 'pranavbhargava.1@gmail.com',
      password: 'admin123',
    },
    {
      email: 'admin1@example.com',
      password: 'admin123',
    },
    {
      email: 'admin2@example.com',
      password: 'admin123',
    },
    {
      email: 'admin3@example.com',
      password: 'admin123',
    },
    {
      email: 'admin4@example.com',
      password: 'admin123',
    },
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
    setShowPassword(false);
  };

  const validateEmail = (email) => {
    // More validations can be included
    return email.includes('@');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      // To be later replaced by the database data for admin login
      
      const admin = admins.find((admin) => admin.email === email);

      if (admin) {
        setShowPassword(true);
      } else {
        setEmailError('This email is not registered for Admin panel Login');
      }
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const admin = admins.find((admin) => admin.email === email);
    if (admin && admin.password === password) {
      dispatch(login({ email, password }));
      history.push('/Dashboard');
    } else {
      setPasswordError('Invalid password');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <img src={TopMargin} alt="Top Margin" className={styles.topImage} />
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
          {showPassword ? (
            <React.Fragment>
              <div className={styles.profileImageContainer}>
                <img src={profileImage} alt="Profile" className={styles.profileImage} />
              </div>
              <div className={styles.profileText}>Hi! Austin Robertson</div>
              <div className={styles.message}>Enter your password to access the admin</div>
              <form className={styles.loginForm} onSubmit={handleLogin}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <div className={styles.errorMessage}>{passwordError}</div>}
                <button type="submit">Login</button>
                <div className={styles.forgotPassword}>
                  <Link to="/forgotpassword" className={styles.linkButton}>
                    Forgot Password
                  </Link>
                </div>
              </form>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={styles.loginText}>
                <strong>Sign In</strong>
              </div>
              <form className={styles.loginForm} onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className={styles.errorMessage}>{emailError}</div>}
                <button type="submit">Sign in</button>
              </form>
            </React.Fragment>
          )}
        </div>
        <div className={styles.rightContainer}>
          <img src={rightContainerImage} alt="Right Container" className={styles.rightImage} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;




