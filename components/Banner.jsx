import "./Home.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="bg-primary text-light p-5 p-lg-0 pt-lg-5    text-center text-sm-start">
        <div className="container">
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="banner">
              <h1 className="mt-5">
                Sleep<span className="text-warning">Earn</span>
              </h1>
              <p className="lead fs-4 fw-bold mt-0">An App Help You To Earn</p>
              <button type="button" className="btn btn-warning btn-lg">
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </button>
            </div>
            <div className="custom-shape-divider-bottom-1658932138">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
