import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mx-auto bg-primary">
        <div className="container-fluid">
          <img
            src="img/logo-4.png"
            className="rounded float-start"
            style={{ width: 100 + "px" }}
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
                <a
                  className="nav-link active fs-2 text-warning"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link active fs-2 text-warning "
                  aria-current="page"
                  href="https://www.amazon.com"
                  target="blank"
                >
                  Products
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link active fs-2 text-warning "
                  aria-current="page"
                  href="https://www.walmart.com"
                  target="blank"
                >
                  Best Seller
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-warning m-3">
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </button>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
