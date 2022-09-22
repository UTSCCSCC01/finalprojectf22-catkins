import Reach from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ClubsList from './components/clubs-list.component';
import CreateClub from './components/create-club.component';
import CreateUser from './components/create-user.component';
import EditClub from './components/edit-club.component';

function App() {
  return (
    <div>
      <div className='container'>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/clubs" className="navbar-brand">
          Clubs List
        </a>
        <a href="/users" className="navbar-brand">
          Users List
        </a>
        <a href="/clubs/update/:id" className="navbar-brand">
          Update Club
        </a>
      </nav>

      </div>
    </div>
  );
}

export default App;
