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
  console.log("ZDES")
  return (
    <div className="flex flex-col items-center h-screen">
     {clubsFeed.map((item) => {
        return <ClubsPost group={item.group} title={item.title} createdAt={item.createdAt} username={item.username} description={item.description}/>
      })}

    </div>
  );
}

export default ClubsFeed;