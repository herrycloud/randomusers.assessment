import React, { useEffect, useState } from 'react';

function RandomUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Street</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address.street}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RandomUsers;









