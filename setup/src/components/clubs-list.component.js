import React from 'react';
import axios from 'axios';

export default class ClubsList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`/clubs`)
      .then(res => {
        const clubs = res.data;
        this.setState({ clubs });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.clubs
            .map(club =>
              <li key={club.id}>{club.name}</li>
            )
        }
      </ul>
    )
  }
}