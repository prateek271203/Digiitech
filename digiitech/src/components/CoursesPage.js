import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import "./CoursesPage.css";
function CoursesPage() {
  return (
    <div id="Cp">
      <nav className="navbar upper" style={{ backgroundColor: "#192f60" }}>
        <div className="container-fluid">
          <span className="navbar-text" style={{ color: "#fff" }}>
            <i className="fa-solid fa-phone p-1"></i> New Course Enquiry : +91
            12345 67890
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="/">
              <i className="fa-solid fa-caret-down ms-2"></i>
            </a>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h1>Call for enquiry</h1>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fff", boxShadow: " 0px 4px 10px #f3f3f6" }}
      >
        <div className="container-fluid py-2 ms-5" style={{ marginTop: "2px" }}>
          {/* <img src="logo-digiidunia.png" width={"30px"}></img> */}
          <a className="navbar-brand" href="/">
            Digii Tech
          </a>
          {/* Search box start */}
          <form className="ms-5" style={{ width: "610px" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Courses"
              aria-label="Search"
              style={{ fontSize: "19px", fontWeight: "500" }}
            />
          </form>
          {/* Search box end */}
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
                <a className="nav-link mx-1" aria-current="page" href="/">
                  Corporate Trainings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link-active mx-2"
                  aria-current="page"
                  href="courses-link"
                  target="_blank"
                >
                  <i>Course</i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-1" aria-current="page" href="/">
                  Blog
                </a>
              </li>
              <div className="ms-4 mx-5">
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

      {/* container-main start*/}

      <div className="con">
        {/* breadcrumb start*/}
        <div role="presentation" className="py-4">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon
                sx={{ mr: 0.5 }}
                fontSize="inherit"
                style={{ fontSize: "20px" }}
              />
              Home
            </Link>
            <Link color="inherit" underline="none">
              <AutoStoriesTwoToneIcon
                sx={{ mr: 0.8 }}
                fontSize="inherit"
                style={{ fontSize: "20px" }}
              />
              Courses
            </Link>
          </Breadcrumbs>
        </div>
        {/* breadcrumb end */}

        {/* title start */}
        <div>
          <div className="page-title">
            <h1
              style={{ color: "#192f60", marginLeft: "6px", fontSize: "40px" }}
            >
              Choose a category to find your course
            </h1>
            <div className="sub-title">
              <p
                style={{
                  color: "#42526e",
                  fontSize: "28px",
                  marginLeft: "5px",
                }}
              >
                100+ Live online courses chosen by 50000+ working professionals
              </p>
            </div>
          </div>
          <div className="py-4" style={{ marginLeft: "6px" }}>
            <div className="tabs" style={{ display: "flex", flexWrap: "wrap" }}>
              <a href="/" className="box-active">
                <strong>All Courses</strong>
              </a>
              <a href="/" className="box ms-4">
                <strong>Python</strong>
              </a>
              <a href="/" className="box ms-4">
                <strong>Web Developmet</strong>
              </a>
              <a href="/" className="box ms-4">
                <strong>Data Science</strong>
              </a>
              <a href="/" className="box ms-4">
                <strong>AWS Certification</strong>
              </a>
              <a href="/" className="box ms-4">
                <strong>Design</strong>
              </a>
              <a href="/" className="box" style={{ marginTop: "20px" }}>
                <strong>Marketing</strong>
              </a>
              <a href="/" className="box ms-4" style={{ marginTop: "20px" }}>
                <strong>Others</strong>
              </a>
            </div>
          </div>
        </div>
        {/* title ends */}

        {/*  course category start */}
        {/*  course category end */}
      </div>
      {/* main container end*/}
      <div className="category-head">
        <ul>
          <div className="category-title active" id="all">
            <li>All</li>
            <span>
              <i className="fas fa-border-all"></i>
            </span>
          </div>
          <div className="category-title" id="web-development">
            <li>Web Development</li>
            <span>
              <i className="fas fa-theater-masks"></i>
            </span>
          </div>
          <div className="category-title" id="python">
            <li>Python</li>
            <span>
              <i className="fas fa-landmark"></i>
            </span>
          </div>
          <div className="category-title" id="data-science">
            <li>Data Scince</li>
            <span>
              <i className="fas fa-chart-area"></i>
            </span>
          </div>
          <div className="category-title" id="aws-certification">
            <li>Aws Certification</li>
            <span>
              <i className="fas fa-coins"></i>
            </span>
          </div>
          <div className="category-title" id="others">
            <li>Others</li>
            <span>
              <i className="fas fa-running"></i>
            </span>
          </div>
        </ul>
      </div>
      <div
        id="Coursecard"
        style={{
          width: "1200px",
          display: "grid",
          gridTemplateColumns: "reapeat(3,1fr)",
          padding: "auto",
          margin: "auto",
        }}
      >
        <div className="card web-development">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card web-development">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card web-development">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body mx-3">
            <h5 className="card-title py-2">
              Data Science and Machine Learning Internship Program
            </h5>
            <p className="card-text">
              Live Courses: Data Science, Python, Machine Learning, Tableau &
              more
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-file-invoice py-2"></i>Certificate
              </li>
              <li>
                <i className="fa-regular fa-clock py-2"></i>80 Hrs of
                classNamees
              </li>
              <li>
                <i className="fa-regular fa-calendar py-2"></i>Weekend/Weekday
                classNamees
              </li>
            </ul>
            <div className="button">
              <a
                href="/"
                className="card-link"
                style={{ textDecoration: "none;" }}
              >
                View Course Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CoursesPage;
