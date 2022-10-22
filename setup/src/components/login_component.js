import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../login.css";
import { isRouteErrorResponse } from "react-router-dom";
var auth = "{{authetincation}}";
function Login() {
  //Convert form into JSON object and set POST request
  function form_submission(e) {
    e.preventDefault();
    var content = {
      Username: document.getElementById("username").value,
      Password: document.getElementById("password").value,
    }; //Get form infod
    console.log("sdfjhsdkjf");

    axios.post("http://localhost:5000/users/login/", content).then((res) => {
      console.log(res);
      alert(res.data);
    });
    // alert();
  }
  return (
    <div className="main">
      <div className="form">
        <form method="post" onSubmit={form_submission}>
          <h2>Login</h2>
          <div className="text">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="Username"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="text">
            <i className="fas fa-key"></i>
            <input
              type="password"
              name="Password"
              id="password"
              placeholder="Password"
            />
          </div>
          <input type="submit" value="Login" />
        </form>
        {/* {auth == "false" && <p>Invalid username or Password</p>} */}
      </div>
    </div>
  );
}
export default Login;
