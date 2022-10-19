import axios from 'axios';
import React from 'react';

export default class PostCreate extends React.Component {

  constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

      this.state = {title: "", username: "", group: "", description: "", public: true, priority: 0, clubLead: []}
  }
  
  handleChange = (e) => {
    const{ name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    let actualPublic = false
    if (this.state.public == "true")
        actualPublic = true
    else
        actualPublic = false

    const post = {
      title: this.state.title,
      username: this.state.username,
      group: this.state.group,
      description: this.state.description,
      public: actualPublic,
      priority: Number(this.state.priority)
    };

    console.log(post);

    axios.post(`http://localhost:5000/posts/add`,  post)
      .then(res => {
        console.log("res: " + res);
        console.log("res.data: " + res.data);
      })

    window.location.reload(false)
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/'+'633eece780fabeb102d55acd').then(user => {
        this.setState({username: user.data.username})
        this.setState({group: user.data.username})

        axios.get('http://localhost:5000/clubs/').then(clubs => {
            this.setState({
                clubLead: clubs.data.map((club) => {
                    if (club.owner == user.data.username)
                        return club.clubName
                    return null
                })
            })
        });
    })
    .catch((error) => {
        console.log(error);
    })
  }

  render() {

    return (
      <div class="ml-10">
        <br></br>
        <div class="text-5xl font-bold mt-0 mb-6"> Create Your Post! </div>
        <form onSubmit={this.handleSubmit} >
          <label class="ml-10">
            Title:
            <input type="text" name="title" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
          </label>
          <br></br>
          <label class="ml-10">
            Description:
            <input type="text" name="description" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
          </label>
          <br></br>
          <label class="ml-10">
            Public:
            <div onChange={this.handleChange} style={{ display: "inline" }}>
                <input type="radio" value="true" name="public"/> Yes
                <input type="radio" value="false" name="public"/> No
            </div>
          </label>
          <br></br>
          <label class="ml-10">
            Type:
            <div onChange={this.handleChange} style={{ display: "inline" }}>
                <input type="radio" value="0" name="priority"/> Post
                <input type="radio" value="1" name="priority"/> Question
                <input type="radio" value="2" name="priority"/> Announcement
            </div>
          </label>
          <br></br>
          <label class="ml-10">
            Post As:
            <select type="text" name="group" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500">
                <option value={this.state.username}>{this.state.username}</option>
                {
                    this.state.clubLead.map(function(clubName) {
                        if (clubName != null)
                            return <option value={clubName}>{clubName}</option>
                    })
                }
            </select>
          </label>
          <br></br>
          <br></br>
          <button type="submit" class="px-10 bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">Post</button>
        </form>
      </div>
    )
  }
}