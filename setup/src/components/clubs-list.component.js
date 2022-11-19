import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import SearchBar from './reusable_components/Search_bar';
import { useSelector } from 'react-redux';
import SearchInterface from './search_interfaces/clubs-list-search-interface';

function ClubsList() {

  let currentUser = useSelector(state => state.login.userName);

  // Used for setting states for our club variable
  const [clubs, setClubs] = useState([{}]);

  const changeClubsList = (dataToReplaceWith) => {
    setClubs(dataToReplaceWith)
  }

  useEffect(() => {
    axios.get('http://localhost:5000/clubs').then(resp => {

    setClubs(resp.data)
    //console.table(resp.data[0]);
  });
  }, []);

  const submitFunction = (e) => {
    e.preventDefault();

    const groupName = e.target[0].value
    console.log(groupName)
    axios.get('http://localhost:5000/search/groups', { params: {
      clubName: groupName
    } }).then(res => {
      console.log(res.data)
    setClubs(res.data)

    });
  }

  // Used for setting states for our user variable
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/getUser/'+currentUser).then(resp => {

    setUser(resp.data)
      // console.table(resp.data[0]);
  });
  }, []);

  return (

    <div className="flex flex-col items-center h-screen">
      <SearchInterface listChangeFunction={changeClubsList} />

      <table>
      <thead>
        {/*Header of Clubs List*/}
        <tr>
          <th>Club Name</th>
          <th>Owner</th>
          <th>Description</th>
          <th>Club Tags</th>
        </tr>
      </thead>
      <tbody>
          {clubs.map((club) => {
            let button = <button onClick={() => follow(club.clubName)}>Follow</button>
            return(
              <tr key={club.clubName}>
                <Link to={`/clubs/${club._id}`}>{club.clubName}</Link>                
                <th>{club.owner}</th>
                <th>{club.description}</th>
                <th>{club.clubTags}</th>

                {/* Create a follow or unfollow button for each corresponding club */}
                {(() => {
                  let button = <button onClick={() => follow(club.clubName, user)} style={{borderColor: 'black', borderWidth: '2px'}}>Follow</button>
                  if (user.following != undefined) {
                    if (user.following.includes(club.clubName)) {
                      button = <button onClick={() => unFollow(club.clubName, user)} style={{borderColor: 'black', borderWidth: '2px'}}>UnFollow</button>
                    }
                  }
                  return (
                    button
                  )
                })()}

              </tr>
            );
          })}
        </tbody>
    </table>
    </div>
  );
}

// User will follow group name and be updated in database
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

  axios.post('http://localhost:5000/users/update/'+user._id, updatedUser)
  window.location.reload(false)
}

// User will unfollow group name and be updated in database
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

  axios.post('http://localhost:5000/users/update/'+user._id, updatedUser)
  window.location.reload(false)
}

export default ClubsList;