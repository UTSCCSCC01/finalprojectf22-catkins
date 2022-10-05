import { render } from '@testing-library/react';
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

  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/'+'633ba147b7ccdaf36e912f5c').then(resp => {

    setUser(resp.data)
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
            let button = <button onClick={() => follow(club.name)}>Follow</button>
            return(
              <tr key={club.name}>
                <th>{club.name}</th>
                <th>{club.username}</th>
                <th>{club.description}</th>
                <th>{club.clubType}</th>

                {/* Create a follow or unfollow button for each corresponding club */}
                {(() => {
                  let button = <button onClick={() => follow(club.name, user)}>Follow</button>
                  if (user.following != undefined) {
                    if (user.following.includes(club.name)) {
                      button = <button onClick={() => unFollow(club.name, user)}>UnFollow</button>
                    }
                  }
                  return (
                    button
                  )
                })()}

              </tr>
            ); 
          })};
        </tbody>
    </table>
    </div>
  );
}

function follow(name, user) {
  if (!user.following.includes(name)){
    user.following.push(name)
  }
  const updatedUser = {
    username: user.username,
    following: user.following
  }

  axios.post('http://localhost:5000/users/update/'+'633ba147b7ccdaf36e912f5c', updatedUser)
  window.location.reload(false)
}

function unFollow(name, user) {
  if (user.following.includes(name)){
    user.following.splice(user.following.indexOf(name), 1);
  }
  const updatedUser = {
    username: user.username,
    following: user.following
  }

  axios.post('http://localhost:5000/users/update/'+'633ba147b7ccdaf36e912f5c', updatedUser)
  window.location.reload(false)
}

export default ClubsList;
