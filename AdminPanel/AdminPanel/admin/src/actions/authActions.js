// authActions.js
import axios from 'axios';

export const login = (credentials) => {
  return (dispatch) => {
    
    axios.post('', credentials)
      .then((res) => {
        
      })
      .catch((err) => {
        
      });
  };
};


// authActions.js
export const resetPassword = (data) => {
  
  return async (dispatch) => {
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      
      dispatch(resetPasswordSuccess());
    } catch (error) {
      
      dispatch(resetPasswordError(error.message));
    }
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: 'RESET_PASSWORD_SUCCESS',
  };
};

export const resetPasswordError = (error) => {
  return {
    type: 'RESET_PASSWORD_ERROR',
    payload: error,
  };
};
