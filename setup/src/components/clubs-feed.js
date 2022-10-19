import axios from 'axios';
import Reach, { useEffect, useState } from 'react';
import ClubsPost from './clubs-post';

function ClubsFeed() {

  // Used to set states for our clubsFeed variable
  const [clubsFeed, setClubsFeed] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/feed').then(res => {

    console.log(res.data)
    setClubsFeed(res.data)
      // console.table(resp.data[0]);
  });


  }, [])

  // Used to set states for our user variable
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/'+'633eece780fabeb102d55acd').then(resp => {

    setUser(resp.data)
      // console.table(resp.data[0]);
  });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
     {clubsFeed.map((item) => { 
       console.log(user)

       // If statement to so that users would only see post from groups that they are following
        if ((user.following != undefined && user.following.includes(item.group)) || item.public == true) {
          return <ClubsPost group={item.group} title={item.title} createdAt={item.createdAt} username={item.username} description={item.description}/>
        }
      })}

    </div>
  );
}

export default ClubsFeed;