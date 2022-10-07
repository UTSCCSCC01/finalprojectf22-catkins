import Reach from 'react';
import { Routes, Route, Link } from "react-router-dom";

import pfp from './images/image.jpg';
import ClubsFeed from './components/clubs-feed';

import ClubsList from './components/clubs-list.component';
import ClubCreate from './components/create-club.component';
import CreateUser from './components/create-user.component';
import EditClub from './components/edit-club.component';

import axios from "axios";
import React from 'react';
import Left_Navbar from './components/navbars/Left_Navbar';

function App() {

  return (



    <div className='h-screen w-screen flex flex-row'>

    <Left_Navbar />

    {/* div for chat button */}


    <div className='flex flex-col h-screen my-7 w-screen '>

      <nav className='flex justify-around items-center h-10 border-2 border-[#D0D1C9] shadow-md'>

      <a href="/clubs">
        Clubs List
      </a>

      <a href="/users" >
        Users List
      </a>

      <a href="/clubs/update/:id" >
        Update Club
      </a>
      <a href="/clubs/testClub">
        Update Club
      </a>
      <a href='/clubs/create'>
        Create a Club
      </a>

      </nav>

      <Routes>
        <Route path="clubs" element={<ClubsList/>} />
        <Route path="/clubs/testClub" element={<ClubsFeed/>} />
        <Route path="clubs/create" element={<ClubCreate/>} />
    </Routes>

    </div>

    </div>


  );
}

export default App;