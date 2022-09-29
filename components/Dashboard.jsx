import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardCalc from "./DashboardCalc";
import DashNews from "./DashNews";
import "./Dashboard.css";
import DashFooter from "./DashFooter";
// import DisplayPics from "./DisplayPics";
// import UploadPhoto from "./UploadPhoto";
import calcStars from "./DashCalc";
import calcMoney from "./moneyRewards";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      //fetch api that uses the GET method
      const response = await fetch("http://localhost:8000/profile", {
        method: "GET",
        //retrieving the token and putting it in the Auth header
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      setName(parseRes.username);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      //removing the token from local storage
      localStorage.removeItem("token");
      setAuth(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProfile();
    getStars();
    getMoney();
    // updateStars();
    // updatePoints();
    // updateStarsPoints();
    // updateLatestStars(25);
  }, []);

  // fetch API Back End  display value in Front End(Web) useState button

  const getStars = async () => {
    try {
      console.log(getStars);
      const response = await fetch("http://localhost:8000/sleep_rewards", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
      setStars(parseRes.stars);
    } catch (error) {
      console.log(error.message);
    }
  };

  // fetch API Back End display value in Front End(Web) useState button

  const getMoney = async () => {
    try {
      console.log(getMoney);
      const response = await fetch("http://localhost:8000/user_rewards", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
      setMoney(parseRes.money_rewards);
    } catch (error) {
      console.log(error.message);
    }
  };

  // back end connection and calculation table update

  const updateStarsPoints = (points) => {
    const { toAdd, toSubtract } = calcStars(points);
    updatePoints(toSubtract); /*Back End connect */
    updateStars(toAdd); /*Back End connect */
    console.log(toAdd, toSubtract);
  };

  // Add Stars Back End API

  const updateStars = async (toAdd) => {
    try {
      const response = await fetch("http://localhost:8000/add_sleep_rewards", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          toAdd: toAdd,
        }),
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
      setStars(toAdd);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Subtract current_total_points Back End API

  const updatePoints = async (toSubtract) => {
    try {
      const response = await fetch(
        "http://localhost:8000/current_total_points",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            toSubtract: toSubtract,
          }),
        }
      );
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateMoneyRewards = (points) => {
    const { toSubtract, toAdd } = calcMoney(points);
    updateMoney(toAdd); /*Back End connect */
    updateLatestStars(toSubtract); /*Back End connect */
    console.log(toSubtract, toAdd);
  };

  // Subtract current stars back end api

  const updateLatestStars = async (toSubtract) => {
    try {
      const response = await fetch("http://localhost:8000/sleep_rewards", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          toSubtract: toSubtract,
        }),
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Add Money Rewards back end api

  const updateMoney = async (toAdd) => {
    try {
      const response = await fetch("http://localhost:8000/add_user_rewards", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          toAdd: toAdd,
        }),
      });
      //parsing the json back to a JS object
      const parseRes = await response.json();
      console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useState function

  const [sleepTime, setSleepTime] = useState(Date.now());
  const [wakeTime, setWakeTime] = useState(Date.now());
  const [display, setDisplay] = useState("");
  const [stars, setStars] = useState();
  const [money, setMoney] = useState();
  // const [totalStars, setTotalStars] = useState("");

  // const handleUpdateStars = (e) => {
  //   e.preventDefault();
  //   setTotalStars(e.target.value);
  // };

  const handleSleepChange = (e) => {
    e.preventDefault();
    setSleepTime(e.target.value);
  };

  const handleWakeChange = (e) => {
    e.preventDefault();
    setWakeTime(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay("");
    setSleepTime("");
    setWakeTime("");
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setDisplay(DashboardCalc(sleepTime, wakeTime));
    handleUpload(DashboardCalc(sleepTime, wakeTime));
  };

  // Updating Table Back End

  const handleUpload = (sleep_points) => {
    fetch("http://localhost:8000/sleep_time", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify({
        start_of_sleep: sleepTime,
        wake_up: wakeTime,
        sleep_points: parseInt(sleep_points),
      }),
      credentials: "include",
    });

    fetch("http://localhost:8000/current_total_points", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        toSubtract: -parseInt(sleep_points),
      }),
    });

    fetch("http://localhost:8000/sleep_rewards", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        toSubtract: -parseInt(stars),
      }),
    });
  };

  return (
    <>
      {/* <!-- Nav Bar Section -->  */}

      <nav
        className="d-flex navbar navbar-expand-md navbar-light mx-auto-md"
        id="nav"
      >
        <div className="container-fluid">
          <img
            src="img/logo-4.png"
            className="rounded float-start"
            id="navImg"
            style={{ width: 110 + "px" }}
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto">
              <li className="nav-item px-4">
                <Link className="nav-link active fs-2 text-warning" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-4">
                <Link
                  className="nav-link active fs-2 text-warning "
                  to="/Health"
                >
                  Healthy Living
                </Link>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link active fs-2 text-warning "
                  href="index.html"
                >
                  Call a Doctor
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-warning m-3"
              onClick={logout}
            >
              Logout
            </button>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <!-- Profile background --> */}

      <div className="img-fluid">
        <img src="/img/doctor.jpg" className="image" alt="..." />
      </div>
      <div className="bg-light pt-3 pb-5">
        <div className="pt-2">
          <h1 className="text-center text-primary mt-3" id="greetings">
            Good Day {name}!!
          </h1>
          <h2 className="text-center text-primary mt-3">
            How is Your Sleep Today?
          </h2>
        </div>

        {/* <DisplayPics /> */}
        {/* <UploadPhoto /> */}

        {/* <!-- Function  --> */}

        <div className="d-flex justify-content-evenly pt-5">
          <div className="form">
            <p className="lead text-center text-primary fw-bold">Start Sleep</p>
            <input
              className="btn text-primary border-primary"
              style={{ width: 205 + "px" }}
              type="datetime-local"
              name=""
              id="sleep"
              value={sleepTime}
              onChange={handleSleepChange}
            />

            <p className="lead text-center text-primary fw-bold">Wake Up</p>
            <input
              className="btn text-primary text-center border-primary"
              style={{ width: 205 + "px" }}
              type="datetime-local"
              name=""
              id="wake"
              value={wakeTime}
              onChange={handleWakeChange}
            />
          </div>

          <div className="btn align-self-center" id="btnFunc">
            <button
              className="btn btn-primary m-1 text-warning fw-bold"
              id="addBtn"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            <button
              className="btn btn-primary m-1 text-warning fw-bold"
              id="clearBtn"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <div>
            <p className="lead text-center text-primary fw-bold">Sleep Hours</p>
            <div className="figure text-center border-1 mx-5">
              <h1 className="h1 text-warning" id="display">
                {display}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Total Stars  */}

      <div className="d-flex justify-content-center bg-light pb-5 pt-5">
        <div>
          <p className="lead text-center text-primary fw-bold">Redeem Stars</p>
          <button
            className="btn btn-primary m-1 btn-lg text-warning fw-bold"
            onClick={(e) => updateStarsPoints(100)}
            // value={totalStars}
            // onChange={handleUpdateStars}
          >
            Click Me!
          </button>
          <p className="lead text-center text-primary fw-bold pt-5">
            Total Stars
            <i className="bi bi-star text-primary m-1" aria-hidden="true"></i>
          </p>
          <div className="figure text-center border-1 mx-5">
            <h1 className="h1 text-warning" id="display">
              {stars}
            </h1>
          </div>
        </div>

        {/* Money Rewards */}

        <div className="px-5">
          <p className="lead text-center text-primary fw-bold">Redeem Money</p>
          <button
            className="btn btn-primary m-1 btn-lg text-warning fw-bold"
            onClick={(e) => updateMoneyRewards(10)}
          >
            Click Me!
          </button>
          <p className="lead text-center text-primary fw-bold pt-5">
            Money Rewards
          </p>
          <div className="figure text-center border-1 mx-5">
            <h1 className="h1 text-warning" id="display">
              {money}
            </h1>
          </div>
        </div>
        <div></div>
      </div>

      {/* <!-- Newsletter --> */}
      <DashNews />
      {/* <!-- Footer --> */}
      <DashFooter />
    </>
  );
};
export default Dashboard;

// Parang may way din kuya Lloyd when you scroll magkaka background si NavBar pero it's up to you lang.
