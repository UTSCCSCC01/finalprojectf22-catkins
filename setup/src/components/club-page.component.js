import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {Link } from 'react-router-dom';

handleChange = (e) => {
    const{ name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    var url = window.location.href;
    var clubId = url.split("/").pop();

    // Used for setting states for our club variable
    const [clubs, setClubs] = useState([{}]);
    useEffect(() => {
      axios.get('http://localhost:5000/clubs/' + clubId).then(resp => {
      setClubs(resp.data)
      console.table(resp.data[0]);
    });
    }, []);

function ClubPage() {
        event.preventDefault();
    
        const post = {
          title: this.state.Title,
          username: "Amu",
          group: clubId,
          description: this.state.Description,
          public: this.state.Public,
          priority: 0
        };
    
        console.log(post);
    
        axios.post(`http://localhost:5000/posts/add`,  post)
          .then(res => {
            console.log("res: " + res);
            console.log("res.data: " + res.data);
          })
    
        window.location.reload(false)
      }
    
        return (
            
          <div class="ml-10">
            {/* Allow user to add their posts */}
            <div class="text-5xl font-bold mt-0 mb-6"> Let your voice be heard! </div>
            <form onSubmit={this.handleSubmit} >
              <label class="ml-10">
                Title 
                <input type="text" name="Title" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
              </label>
                <input type="text" name="Description" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
              <br></br>
              <label class="ml-10">
                Members only:
                <input type={"checkbox"} name="Public" onChange={this.handleChange}/>
              </label>
              <button type="submit" class="px-10 bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">Add</button>
            </form>
    
    
            {/* List all posts from club */}
          </div>
        )
      }



export default ClubPage;