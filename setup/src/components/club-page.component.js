import axios from 'axios';
import React, { useEffect, useState, setState} from 'react';
import ClubsPost from './clubs-post';

function ClubPage() {
  // Getting club ID
  var url = window.location.href;
  var clubId = url.split("/").pop();
  // Need sessions
  var currentUser = "mario"

 // Getting Specific club data
 const [club, setClub] = useState([{}]);
 useEffect(() => { 
  axios.get('http://localhost:5000/clubs/' + clubId).then(resp => {
   setClub(resp.data)
  });
 }, []);

  // Get all posts from specific club 
  const [clubsFeed, setClubsFeed] = useState([{}]);
  useEffect(() => {
    axios.get('http://localhost:5000/clubs/' + club.clubName + '/Posts').then(response => {
      setClubsFeed(response.data)
      });
  }, [club]);

  // Handle User Input
  const handleChange = (e) => {
    const{ name, value } = e.target;
    setState({
      [name]: value,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    // Store Public Setting
    let actualPublic = false
    if (this.state.Public == "true")
        actualPublic = true
    else
        actualPublic = false

    const post = {
      title: this.state.Title,
      username: currentUser,
      group: club.clubName,
      description: this.state.Description,
      public: actualPublic,
      priority: Number(this.state.Priority)
    };

    console.log(post);

    axios.post(`http://localhost:5000/posts/add`,  post)
      .then(res => {
        console.log("res: " + res);
        console.log("res.data: " + res.data);
      })

    window.location.reload(false)
  }


  // Allow user to see post submission if they are the owner
  // O/W just load posts
  if (currentUser == club.owner) {
    console.log("Owner!")
  } else {
    console.log("Not Owner")
  }

 return (
  <div class="ml-10">
    <div class="text-5xl font-bold mt-0 mb-6">{club.clubName}</div>
    <br/>
    {club.description}

    {/* Allow user to add their posts */}
    <div class="text-2xl font-bold mt-0 mb-6"> Let your voice be heard! </div>
    <form onSubmit={handleSubmit}>
      <label class="ml-10">
        Title 
        <input type="text" name="Title" onChange={handleChange}  class="ml-10 rounded-md border-2 border-rose-500" />
      </label>
      <br/>
      <label class="ml-10">
        Description
      <input type="text" name="Description" onChange={handleChange}  class="ml-10 rounded-md border-2 border-rose-500" />
      </label>
      <br/>
      <label class="ml-10">
        Public:
          <div name="Public" onChange={handleChange} style={{ display: "inline" }}>
            <input type="radio" value="true" name="public"/> Yes
            <input type="radio" value="false" name="public"/> No
          </div>
      </label>
      <br/>
      <label class="ml-10">
        Type:
        <div name="Priority" onChange={handleChange} style={{ display: "inline" }}>
            <input type="radio" value="0" name="priority"/> Post
            <input type="radio" value="1" name="priority"/> Question
            <input type="radio" value="2" name="priority"/> Announcement
          </div>
      </label>
      <br/>
      <button type="submit" class="px-10 bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">Post</button>
    </form>


    {/* List all posts from club */}
    <div className="flex flex-col items-center h-screen">
      {clubsFeed.map((item) => { 
        // If statement to so that users would only see post from groups that they are following
        return <ClubsPost group={item.group} title={item.title} createdAt={item.createdAt} username={item.username} description={item.description}/>
      })}

    </div>

  </div>
);
}

export default ClubPage;