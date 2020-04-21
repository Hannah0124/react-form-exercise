// https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/React/exercises/forms-worksheet.md


import React, {useState} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import UserInfo from './components/UserInfo';

const FIELDS = [
  {
    key: 'firstName',
    placeholder: 'First Name'
  },
  {
    key: 'lastName',
    placeholder: 'Last Name'
  },
  {
    key: 'email',
    placeholder: 'email'
  },
  {
    key: 'password',
    placeholder: 'password'
  },
];


function App() {

  const [formFields, setFormFields] = useState([]);
  const [updated, setUpdated] = useState(false);


  const updateUserInfo = (userInfo) => {
    console.log('you just clicked the button!');

    const newformFields = [...formFields]; 


    newformFields.push(userInfo);
    setFormFields(newformFields);

    setUpdated(true);
  }


  const displayUserInfo = () => {
    const recentForm = formFields[0]

    if (recentForm) {
      return (
        <div>
          <p>Name: {recentForm.firstName} {recentForm.lastName}</p>
          <p>Email: {recentForm.email}</p>
        </div>
      )
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sign Up
        </h1>
      </header>

      <main>
        <SignupForm 
          fields={FIELDS}
          updateUserInfoCallback={updateUserInfo}
          updated={updated}
        />
        <UserInfo 
          formField={formFields[0]}
          updated={updated}
          displayUserInfoCallback={displayUserInfo}
        />
      </main>
    </div>
  );
}

export default App;
