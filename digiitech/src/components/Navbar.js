import React from "react";
import "./Navbar.css";
import Image1 from "./logo1.png";
function NavBar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light bg-light p-2"
    >
      <div className="container-fluid py-3 ms-5">
        <img src={Image1} style={{ width: "80px" }}></img>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="courses-link"
                target="_blank"
              >
                Course
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
                Calendar
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
            <div className="ms-6 mx-5">
              <button
                type="button"
                className="btn2"
                data-bs-toggle="modal"
                data-bs-target="#examModal"
              >
                Get Started
                <i></i>
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
