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
      Clubs list
    </a>
    <br></br>
    <a href="/clubs/create">
        Clubs List
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
