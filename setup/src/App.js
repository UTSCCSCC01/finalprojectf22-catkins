import Reach from 'react';
import { Routes, Route, Link } from "react-router-dom";

import pfp from './images/image.jpg';
import ClubsFeed from './components/clubs-feed';

import ClubsList from './components/clubs-list.component';
import ClubCreate from './components/create-club.component';
import CreateUser from './components/create-user.component';
import EditClub from './components/edit-club.component';
import ClubsJoin from './components/clubs-join.component';
import PostCreate from './components/post-create.component';

import axios from "axios";
import React from 'react';
import Left_Navbar from './components/navbars/Left_Navbar';
import Top_Navbar from './components/navbars/Top_Navbar';

function App() {

  return (



    <div className='h-screen w-screen flex flex-row'>

    <Left_Navbar />

    {/* div for chat button */}


    <div className='flex flex-col h-screen my-7 w-screen '>

      <Top_Navbar/>


      <Routes>
        <Route path="clubs" element={<ClubsList/>} />
        <Route path="/clubs/testClub" element={<ClubsFeed/>} />
        <Route path="clubs/create" element={<ClubCreate/>} />
        <Route path="clubs/join" element={<ClubsJoin/>} />
        <Route path="post/create" element={<PostCreate/>} />
    </Routes>

    </div>

    </div>


  );
}

export default App;