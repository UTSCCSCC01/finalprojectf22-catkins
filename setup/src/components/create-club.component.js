import React from 'react';
import axios from 'axios';

export default class ClubCreate extends React.Component {
  handleChange = (e) => {
    const{ name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const officialValue = false;

    console.log(this.state.owner);
    console.log(this.state.owner.includes("@utoronto.ca"));
    if(this.state.owner.includes("@utoronto.ca")) {
      const officialValue=true;
    }

    const club = {
      owner: this.state.owner,
      clubName: this.state.clubName,
      description: this.state.description,
      official: officialValue,
      clubTags: this.state.clubTags
    };

    console.log(club);

    axios.post(`http://localhost:5000/clubs/create`,  club)
      .then(res => {
        console.log("res: " + res);
        console.log("res.data: " + res.data);
      })

    window.location.reload(false)
  }

  render() {
    return (
      <div class="ml-10">
        <br></br>
        <div class="text-5xl font-bold mt-0 mb-6"> Create your own club! </div>
        <form onSubmit={this.handleSubmit} >
          <label class="ml-10">
            Owner Name:
            <input type="text" name="owner" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
          </label>
          <br></br>
          <label class="ml-10">
            Club Name:
            <input type="text" name="clubName" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500" />
          </label>
          <br></br>
          <label class="ml-10">
            Club Description:
            <input type="text" name="description" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500"/>
          </label>
          <br></br>
          <label class="ml-10">
            Club Tags:
            <input type="text" name="clubTags" onChange={this.handleChange} class="ml-10 rounded-md border-2 border-rose-500"/>
          </label>
          <br></br>
          <br></br>
          <button type="submit" class="px-10 bg-[#ffffff] h-10 mx-2 border-2 border-[#D0D1C9] shadow-md">Add</button>
        </form>
      </div>
    )
  }
}