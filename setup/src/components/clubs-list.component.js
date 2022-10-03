import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ClubsList() {
  const [clubs, setClubs] = useState([{}]);
  useEffect(() => {
    axios.get('http://localhost:5000/clubs').then(resp => {

    setClubs(resp.data)
      // console.table(resp.data[0]);
  });
  }, []);

  return (
    <div className="container">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Description</th>
          <th>ClubType</th>
        </tr>
      </thead>
      <tbody>
          {clubs.map((club) => {
            return(
              <tr key={club.name}>
                <th>{club.name}</th>
                <th>{club.username}</th>
                <th>{club.description}</th>
                <th>{club.clubType}</th>
              </tr>
            ); 
          })};
        </tbody>
    </table>
    </div>
  );
}

export default ClubsList;
