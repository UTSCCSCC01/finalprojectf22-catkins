import axios from 'axios';
import Reach, { useEffect, useState } from 'react';
import ClubsPost from './clubs-post';

function ClubsFeed() {

  const [clubsFeed, setClubsFeed] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then(res => {

    console.log(res.data)
    setClubsFeed(res.data)
      // console.table(resp.data[0]);
  });


  }, [])

  /*const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/'+'633eece780fabeb102d55acd').then(resp => {

    setUser(resp.data)
      // console.table(resp.data[0]);
  });
  }, []);*/

  // Test user for now
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

  console.log("ZDES")
  return (
    <div className="flex flex-col items-center h-screen">
     {clubsFeed.map((item) => { 
       console.log(user)
        if (user.following != undefined && user.following.includes(item.group)) {
          return <ClubsPost group={item.group} title={item.title} createdAt={item.createdAt} username={item.username} description={item.description}/>
        }
      })}

    </div>
  );
}

export default ClubsFeed;