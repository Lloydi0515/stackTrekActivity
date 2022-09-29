import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // setting the inputs
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // deconstructing the username and password variable from the inputs
  const { username, password } = inputs;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();

      if (parseRes.token) {
        // local storage
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        return alert("Wrong Password or Username");
        // console.log("Something Wrong")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="login">
          <h1>LogIn Here</h1>
          <br />
          <br />
          <form onSubmit={onSubmitForm}>
            <p>Username</p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => onChange(e)}
              required
            />
            <p>Password</p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <input type="submit" name="submit" onChange={(e) => onChange(e)} />
            <Link to="/register">Lost Your Password?</Link>
            <br />
            <Link to="/register">Don't Have an account?</Link>
            <br />
            <Link to="/">Go to Home Page!</Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
