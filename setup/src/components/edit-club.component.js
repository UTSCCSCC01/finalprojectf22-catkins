import Reach from 'react';

function EditClub() {
  return (
    <div className="container">
          <div className="main">
        <div className="image">
            <img src="..//static/img/logo.png" alt="className logo">
        </div>
        <div className="form">
            <form method="post">
                <h2>Login</h2>
                <div className="text">
                    <i className="fas fa-user"></i>
                    <input type="text" name="Username" placeholder="Username">
                </div>
                <div className="text">
                    <i className="fas fa-key"></i>
                    <input type="password" name="Password" placeholder="Password">
                </div>
                <input type="submit" value="Login">
                <p><a href="/create">Create Account</a></p>
            </form>
            <p>Invalid username or Password</p> 
        </div>
    </div>
      Hello World!'
      <div>sdfsdf</div>
    </div>
  );
}

export default EditClub;
