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

  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(false);


  // for SignupForm.js
  const updateUserInfo = (userInfo) => {
    console.log('you just clicked the button!');

    const newUsers = [...users]; 


    newUsers.push(userInfo);
    setUsers(newUsers);

    setUpdated(true);
  }


  // for UserInfo.js
  const displayUserInfo = () => {
    const recentForm = users[0]

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
          // user={users[0]}
          updated={updated}
          displayUserInfoCallback={displayUserInfo}
        />
      </main>
    </div>
  );
}

export default App;
