import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import UserForm from './useForm';
import UserCard from './userCard';

function App() {
  const [user, setUser] = useState(null);

  const getUserData = async (userName) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Github User Card</h1>
      <UserForm onSubmit={getUserData} />
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
