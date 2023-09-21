import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        placeholder="Enter GitHub username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default UserForm;
