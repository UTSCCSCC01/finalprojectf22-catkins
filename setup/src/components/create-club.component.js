import React from 'react';
import axios from 'axios';

export default class ClubCreate extends React.Component {
/*   state = {
    name: ''
  }

  handleChange = event => {
    console.log("name: " + name);
    console.log("value: " + event.target.value);
    this.setState({ 
      name: event.target.value,
     });
  } */

  handleChange = (e) => {
    const{ name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const club = {
      owner: this.state.owner,
      clubName: this.state.clubName,
      description: this.state.description,
      clubTags: this.state.clubTags
    };

    console.log(club);

    axios.post(`http://localhost:5000/clubs/create`,  club)
      .then(res => {
        console.log("res: " + res);
        console.log("res.data: " + res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Owner Name:
            <input type="text" name="owner" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Club Name:
            <input type="text" name="clubName" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Club Description:
            <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            Club Tags:
            <input type="text" name="clubTags" onChange={this.handleChange} />
          </label>
          <br></br>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}