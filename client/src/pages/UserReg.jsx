import React, { useState } from 'react';

export default function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); 

      } else {
        const error = await response.json();
        console.error(error.message); 
      }
    } catch (error) {
      console.error('Failed to register:', error);
    }
  };

  return (
    <div>
      <h1> Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Create username"
            className="form-control mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Create password"
            className="form-control mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}