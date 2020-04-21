import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.css'


const UserInfo = (props) => {

  const userInfoComponents = props.displayUserInfoCallback();

    return (
      <div className="user-info-container">
        <p className="phrase">
          A new account has been created!! 
          <span role="img" aria-label="smile"> 😄</span>
        </p>
        <section className="user-info">
          {userInfoComponents}
        </section>
      </div>
    );
};

UserInfo.propTypes = {
  updated: PropTypes.bool.isRequired,
  formField: PropTypes.object,
}



export default UserInfo;