import React from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import jwtDecode from "jwt-decode";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCreds, setInvalidCreds] = useState(false);
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = JSON.stringify({
      userName: username,
      passWord: password,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(
      "https://legendary-slayers-be-production.up.railway.app/users/signIn",
      {
        method: "POST",
        headers: myHeaders,
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        const user = jwtDecode(res.token);
        props.setUser(user);
        navigate("/userProfile");
      })
      .catch((error) => {
        setInvalidCreds(true);
        console.log("not authorized");
      });
  }
  return (
    <div className="signIn-container">
      <div className="signIn-form">
        <form className="signIn" onSubmit={handleFormSubmit}>
          <h1>Sign In</h1>
          {invalidCreds && (
            <p className="signIn-invalid">
              Invalid credentials. Please try again.
            </p>
          )}
          <input
            type="text"
            value={username}
            placeholder="Username"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
        <Link to="/signUp">
          <button className="create-account-btn">Create account</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
