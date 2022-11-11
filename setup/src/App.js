import Reach from "react";
import { Routes, Route, Link } from "react-router-dom";

import pfp from "./images/image.jpg";
import ClubsFeed from "./components/clubs-feed";

import ClubsList from "./components/clubs-list.component";
import ClubCreate from "./components/create-club.component";
import ClubPage from "./components/club-page.component";
import CreateUser from "./components/create-user.component";
import EditClub from "./components/edit-club.component";
import ClubsJoin from "./components/clubs-join.component";
import PostCreate from "./components/post-create.component";

import axios from "axios";
import React from "react";
import Left_Navbar from "./components/navbars/Left_Navbar";
import Top_Navbar from "./components/navbars/Top_Navbar";
import UsersList from "./components/users_list";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      {/* Add Navbar on the left to be always on display */}
      <Left_Navbar username={"mario"} />

      {/* Navbar on the top to be always on display */}
      <div className="flex flex-col h-screen my-7 w-screen ">
        <Top_Navbar />

        <Routes>
          <Route path="clubs" element={<ClubsList />} />
          <Route path="/clubs/clubsFeed" element={<ClubsFeed />} />
          <Route path="clubs/create" element={<ClubCreate />} />
          <Route path="clubs/join" element={<ClubsJoin />} />
          <Route path="post/create" element={<PostCreate />} />
          <Route path="users" element={<UsersList />} />
          <Route path="clubs/:id" element={<ClubPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
