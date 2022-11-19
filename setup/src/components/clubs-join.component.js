import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { isRouteErrorResponse } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ClubsJoin() {

    let currentUser = useSelector(state => state.login.userName);

    //Convert form into JSON object and set POST request
    function form_submission()

    {
    var content = {club_name: document.getElementById("club_name").value,
                    username: currentUser};//Get form info
    alert('You have joined ' + content.club_name);

    axios.post('http://localhost:5000/clubs/join/', content)
    }

    return (
        <div className="form_container">
            <form id="myform" onSubmit={form_submission}>
            <input type="text" name='club_name' id='club_name' placeholder='Club name'/>
            <button type="submit">Join club</button>
            </form>
        </div>
    );
}

export default ClubsJoin;