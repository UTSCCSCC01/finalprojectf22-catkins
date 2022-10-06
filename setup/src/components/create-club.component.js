import React from 'react';
import axios from 'axios';

export default class ClubCreate extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const club = {
      owner: this.state.owner,
      clubName: this.state.name,
      description: this.state.description,
      clubTags: this.state.clubTags
    };

    axios.post(`/clubs/create`, { club })
      .then(res => {
        console.log(res);
        console.log(res.data);
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