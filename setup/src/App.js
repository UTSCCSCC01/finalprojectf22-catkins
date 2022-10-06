//import Reach from 'react';
import { Routes, Route, Link} from "react-router-dom";

import ClubsList from './components/clubs-list.component';
import ClubCreate from './components/create-club.component';
// import CreateUser from './components/create-user.component';
// import EditClub from './components/edit-club.component';

function App() {

  return (
    <div>
    <>
    <a href="/clubs">
      Clubs List
    </a>
    <br></br>
    <a href="/clubs/create">
        Create a Club
    </a>
    <Routes>
      <Route path="/clubs/create" element={<ClubCreate/>} />
      <Route path="/clubs" element={<ClubsList/>} />
    </Routes>
    </>
    </div>
  

  );
}


export default App;
