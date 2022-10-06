import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isRouteErrorResponse } from 'react-router-dom';

// Test user
const user = 	{
  "_id": "633e2d62c31ac0ed271ce079",
  "username": "mario",
  "password": "mariopassword",
  "role": "student",
  "following": [
    "Badminton",
    "Music Club"
  ],
  "createdAt": "2022-10-06T01:20:34.736Z",
  "updatedAt": "2022-10-06T01:26:44.070Z",
  "__v": 8
}

export default class ClubsList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`/clubs`)
      .then(res => {
        const clubs = res.data;
        this.setState({ clubs });
      })
  }

  /*const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/'+'633eece780fabeb102d55acd').then(resp => {

    setUser(resp.data)
      // console.table(resp.data[0]);
  });
  }, []);*/
  
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
    password: user.password,
    role: user.role,
    following: user.following
  }

  //axios.post('http://localhost:5000/users/update/'+'633eece780fabeb102d55acd', updatedUser)
  window.location.reload(false)
}

function unFollow(name, user) {
  if (user.following.includes(name)){
    user.following.splice(user.following.indexOf(name), 1);
  }
  const updatedUser = {
    username: user.username,
    password: user.password,
    role: user.role,
    following: user.following
  }

  //axios.post('http://localhost:5000/users/update/'+'633eece780fabeb102d55acd', updatedUser)
  window.location.reload(false)
}

export default ClubsList;