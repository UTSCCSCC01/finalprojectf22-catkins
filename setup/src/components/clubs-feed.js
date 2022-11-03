import axios from 'axios';
import Reach, { useEffect, useState } from 'react';
import ClubsPost from './clubs-post';
import SearchBar from './reusable_components/Search_bar';

function ClubsFeed() {

  // Used to set states for our clubsFeed variable
  const [clubsFeed, setClubsFeed] = useState([]);

  const submitFunction = (e) => {
    e.preventDefault()

    const postTitle = e.target[0].value
    axios.get('http://localhost:5000/search/posts', { params: {
      postTitle: postTitle
    } }).then(res => {
    setClubsFeed(res.data)

    });
  }

  useEffect(() => {
    axios.get('http://localhost:5000/feed').then(res => {

    setClubsFeed(res.data)
      // console.table(resp.data[0]);
  });


  }, [])

  // Used to set states for our user variable
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('http://localhost:5000/users/'+'633eece780fabeb102d55acd').then(resp => {

    setUser(resp.data)
     console.table(resp.data[0]);
  });
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar submitFunction={submitFunction} placeholder={"Search posts by their titles"}/>
     {clubsFeed.map((item) => {

       // If statement to so that users would only see post from groups that they are following
        if (user.following != undefined && user.following.includes(item.group)) {
          return <ClubsPost key={item._id}
           group={item.group}
            title={item.title}
            comments={item.comments}
            createdAt={item.createdAt}
             username={item.username}
             description={item.description}
             postId={item._id}
             />

        }
      })}

    </div>
  );
}

export default ClubsFeed;