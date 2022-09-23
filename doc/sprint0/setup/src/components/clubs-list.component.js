import axios from 'axios';
import Reach, { useEffect } from 'react';

function ClubsList() {
  useEffect(() => {
    axios.get('http://localhost:5000/clubs').then(resp => {

      console.log(resp.data[0]);
  });
  }, []);

  return (
    <div className="container">
      Hello World!
    </div>
  );
}

export default ClubsList;
