import axios from 'axios';
import React, { useEffect, useState, Fragment} from 'react';
import ClubsPost from './clubs-post';


function ClubPage() {
  // Getting club ID
  var url = window.location.href;
  var clubId = url.split("/").pop();
  // Need sessions
  var currentUser = "mario";

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

  // Get all executives from specific club 
  const [executives, setClubExecutives] = useState([{}]);
  useEffect(() => {
    axios.get('http://localhost:5000/clubs/' + club.clubName + '/executives').then(response => {
      setClubExecutives(response.data)
      });
  }, [club]);

  const [form, setForm] = useState({});
  useEffect(() => {
    console.log(form);
  }, [form])

  function handleChange(e) {
    // Grab the id and value from the input
    const { id, value } = e.target;

    // Create a new object by spreading out the current form
    // state, and setting the state property to the new value
    setForm({ ...form, [id]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    // Store Public Setting
    let actualPublic = false
    if (form.Public)
        actualPublic = true
    else
        actualPublic = false

    const post = {
      title: form.Title,
      username: currentUser,
      group: club.clubName,
      description: form.Description,
      public: actualPublic,
      priority: Number(form.Priority)
    };

    console.log("POST: " + post);

    axios.post(`http://localhost:5000/posts/add`,  post)
      .then(res => {
        console.log("res: " + res);
        console.log("res.data: " + res.data);
      })

    window.location.reload(false)
  }


  // Allow user to see post submission if they are the owner
  // O/W just load posts
  var isOwner = false;
  if (currentUser === club.owner) {
    isOwner = true;
  } 

  currentUser = "Mario";
  // Get if current user is in Executives
  const [isExecutive, setIsExecutive] = useState([{}]);
  useEffect(() => {
    axios.get('http://localhost:5000/clubs/' + club.clubName + '/' + currentUser).then(response => {
      setIsExecutive(response.data)
      });
  }, [isExecutive]);

 
    console.log("Executives:");
    console.log(isExecutive);
    console.log(isExecutive > 0);
    if(isExecutive > 0){
      isOwner = true;
    }
  

  // Show Official tag if it's an official club
  var isOfficial = false;
  if (club.official === true) {
    isOfficial = true;
  }

  function addExecutiveFunction()
  {
  var executive = {clubName: club.clubName,
                  username: document.getElementById("username").value};
  //Get form info
  alert('You added ' + executive.username + ' to ' + executive.clubName);

  axios.post('http://localhost:5000/clubs/addExecutive/', executive)
  }

 return (
  <div class="ml-10">
    <div class="text-5xl font-bold mt-0 mb-6">{club.clubName}
    {isOfficial === true && (
    <Fragment>
      <label class="text-[#06b6d4] border-2 rounded-full ml-5  p-2 text-base ">
        Official
      </label>
    </Fragment>)}
    </div>
    <br/>
    {club.description}

    {/* Allow user to add their posts */}

    {isOwner === true && (
    <Fragment>
    <div class='text-2xl font-bold mt-0 mb-6}'> Let your voice be heard! </div>
    <form onSubmit={handleSubmit}>
      <label class="ml-10">
        Title 
        <input type="text" id="Title" name="Title" onChange={handleChange}  class="ml-10 rounded-md border-2 border-rose-500" />
      </label>
      <br/>
      <label class="ml-10">
        Description
      <input type="text"  id="Description" name="Description" onChange={handleChange}  class="ml-10 rounded-md border-2 border-rose-500" />
      </label>
      <br/>
      <label class="ml-10">
        Public:
          <div name="Public" id="Public" onChange={handleChange} style={{ display: "inline" }}>
            <input type="radio" value="true" id="Public" name="public"/> Yes
            <input type="radio" value="false" id="Public" name="public"/> No
          </div>
      </label>
      <br/>
      <label class="ml-10">
        Type:
        <div name="Priority" id="Priority" onChange={handleChange} style={{ display: "inline" }}>
            <input type="radio" value="0" id="Priority" name="priority"/> Post
            <input type="radio" value="1" id="Priority" name="priority"/> Question
            <input type="radio" value="2" id="Priority" name="priority"/> Announcement
          </div>
      </label>
      <br/>
      <button type="submit" class="px-10 bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">Post</button>
    </form>
    </Fragment>)}


    {isOwner === true && (
    <Fragment>

    <div class='text-2xl font-bold mt-0 mb-6}'> Add a new executive: </div>

    <div className="form_container">
      <form id="addExecutive" onSubmit={addExecutiveFunction}>
      <input type="text" name='username' id='username' placeholder='Username'/>
      <button type="submit">Add</button>
      </form>
    </div>
    </Fragment>)}

    {/* {club.map((club) => {
      return(
        <tr key={club.clubName}>
        <th>{club.executives}</th>
        </tr>);})} */}

    {/* List all posts from club */}
    <div className="flex flex-col items-center h-screen">
      {clubsFeed.map((item) => { 
        return <ClubsPost group={item.group} title={item.title} createdAt={item.createdAt} username={item.username} description={item.description}/>
      })}

    </div>

    
  </div>
  
);
}

export default ClubPage;