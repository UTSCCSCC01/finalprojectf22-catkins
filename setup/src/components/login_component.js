import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../login.css";
import { isRouteErrorResponse } from "react-router-dom";
var auth = "{{authetincation}}";
function Login() {
  //Convert form into JSON object and set POST request
  function form_submission() {
    var content = {
      username: document.getElementById("Username").value,
      username: document.getElementById("Password").value,
    }; //Get form info
    console.log(content);
    axios.post("http://localhost:5000/login", content);
  }
  return (
    <div className="main">
      <div className="image">
        <img src="..//static/img/logo.png" alt="Class logo" />
      </div>
      <div className="form">
        <form method="post" onSubmit={Login}>
          <h2>Login</h2>
          <div className="text">
            <i className="fas fa-user"></i>
            <input type="text" name="Username" placeholder="Username" />
          </div>
          <div className="text">
            <i className="fas fa-key"></i>
            <input type="password" name="Password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" />
        </form>
        {auth == "false" && <p>Invalid username or Password</p>}
      </div>
    </div>
  );
}
export default ClubsJoin;
