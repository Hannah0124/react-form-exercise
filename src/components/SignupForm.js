import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

const SignupForm = ({fields, updateUserInfoCallback, updated}) => {

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const userInputChange = (event) => {


    const {name, value} = event.target;

    const newFormField = {...userInfo};

    newFormField[name] = value;
    setUserInfo(newFormField);
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...")

    if (userInfo.firstName !== '' && userInfo.lastName !== '' && userInfo.email !== '' && userInfo.password !== '') {
      updateUserInfoCallback(userInfo);
    };
  };


  const signUpFormComponents = fields.map((field, i) => {
    const userInput = userInfo[field.key];
    return (
      <input 
        key={i}
        className="user-input"
        name={field.key}
        onChange={userInputChange}
        value={userInput}
        placeholder={field.placeholder}
      />
    );
  });


  return (
    <form 
      className={updated ? "new-user-form hidden" : "new-user-form" }
      onSubmit={onFormSubmit}
    >
      <input 
        className="blue-btn" 
        type="submit" 
        value="Connect with Facebook" 
      />
      <input 
        className="skyblue-btn" 
        type="submit" 
        value="Connect with Twitter" 
      />
      <p>Or sign up with</p>
      <div className="user-input-container">
        {signUpFormComponents}
      </div>


      <p>By creating an account, you agree to our Terms & Conditions</p>
      <input 
        className="green-btn" 
        type="submit" 
        value="Create account" 
      />
    </form>
  );
};

SignupForm.propTypes = {
  fields: PropTypes.array.isRequired,
  updateUserInfoCallback: PropTypes.func.isRequired,
  updated: PropTypes.bool.isRequired,
};

export default SignupForm;