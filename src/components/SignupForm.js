import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

const SignupForm = ({fields, updateUserInfoCallback, updated}) => {

  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const userInputChange = (event) => {


    const {name, value} = event.target;

    const newFormField = {...formField};

    newFormField[name] = value;
    setFormField(newFormField);
  };

  console.log('ho', formField)


  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form...")

    if (formField.firstName !== '' && formField.lastName !== '' && formField.email !== '' && formField.password !== '') {
      updateUserInfoCallback(formField);
    };
  };


  const signUpFormComponents = fields.map((field, i) => {
    const userInput = formField[field.key];
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
      <input className="blue-btn" type="submit" value="Connect with Facebook" />
      <input className="skyblue-btn" type="submit" value="Connect with Twitter" />
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
};

export default SignupForm;