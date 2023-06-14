import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container py-2">
        {/* <img src="logo-digiidunia.png" width={"30px"}></img> */}
        <Link className="navbar-brand" to="/">
          Digii Tech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* menu start*/}
        <div
          className="collapse navbar-collapse align-middle"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto nav_ul align-items-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Technology
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calender
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Contact Us
              </a>
            </li>
            <div className="mx-3">
              <button type="button" className="btn1 mx-2">
                Log In
              </button>
              <button type="button" className="btn2 mx-2">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
        {/* menu end*/}
      </div>
    </nav>
  );
}
export default NavBar;
