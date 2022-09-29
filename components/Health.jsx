import "./Health.css";
import { Link } from "react-router-dom";
import HealthBlog from "./HealthBlog";
import HealthCalc from "./HealthCalc";

const Health = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mx-auto">
        <div className="container-fluid">
          <img
            src="img/logo-4.png"
            className="rounded float-start"
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
                <Link
                  className="nav-link active fs-2 text-warning"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link active fs-2 text-warning "
                  aria-current="page"
                  href="health.html"
                >
                  Call a Doctor
                </a>
              </li>
              <li className="nav-item px-4">
                <Link
                  className="nav-link active fs-2 text-warning "
                  aria-current="page"
                  to="/Register"
                >
                  Earn
                </Link>
              </li>
            </ul>
            <button type="button" className="btn btn-warning m-3">
              <Link to="/Login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </button>
          </div>
        </div>
      </nav>

      <div className="">
        <img src="img/banner.jpg" className="image" alt="" />
      </div>

      <div>
        <h1 className="tips">Sleeping Health Tips</h1>
        <HealthCalc />
        <h1 className="tips">Sleeping Blogs</h1>
        <HealthBlog />
      </div>
    </>
  );
};

export default Health;
