import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { username, firstname, lastname, email, password, confirm_password } =
    inputs;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        username,
        firstname,
        lastname,
        email,
        password,
        confirm_password,
      };
      if (password !== confirm_password) {
        return alert("Password Don't Match");
      }
      const response = await fetch("http://localhost:8000/register", {
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
        console.log("Something Wrong");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="register">
          <h1>Register Here</h1>
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
            <p>Firstname</p>
            <input
              type="text"
              id="firstName"
              name="firstname"
              placeholder="Enter Firstname"
              value={firstname}
              onChange={(e) => onChange(e)}
              required
            />
            <p>Lastname</p>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter Lastname"
              value={lastname}
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
            <p>Confirm Password</p>
            <input
              type="password"
              id="password"
              name="confirm_password"
              placeholder="Enter Password"
              value={confirm_password}
              onChange={(e) => onChange(e)}
              required
            />
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input type="submit" name="register" value="Register" required />
          </form>
          <Link to="/Login">Log In Here</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
