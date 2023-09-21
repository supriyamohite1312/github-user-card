import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <h2>{user.login}</h2>
      <p>Name: {user.name}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Public Gists: {user.public_gists}</p>
      <p>Profile Created At: {user.created_at}</p>
    </div>
  );
}

export default UserCard;
