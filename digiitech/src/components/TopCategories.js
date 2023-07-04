import React, { useState } from "react";
import styles from "./Styling/TopCategories.module.css";

function TopCategories() {
  const [expanded, setExpanded] = useState(false);

  const toggleRows = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={styles["top-categories"]}>
        <div className="container discover-categories mt-5">
          <h3>Discover Top Categories</h3>
        </div>
        <div className="container d-flex flex-column justify-content-left">
          <div className={`row align-items-start bg-white py-4 justify-content-center ${styles["row"]}`}>
            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-cloud"></i>
              <p>Cloud Computing</p>
            </div>

            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-infinity"></i>
              <p>Dev Ops</p>
            </div>

            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-lightbulb"></i>
              <p>BI and Visualization</p>
            </div>

            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-shield-lock"></i>
              <p>Cyber Security</p>
            </div>

            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-bar-chart-steps"></i>
              <p>Data Science</p>
            </div>

            <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
              <i className="bi bi-journals"></i>
              <p>PG Programs</p>
            </div>

            {expanded && (
              <>
                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-plugin"></i>
                  <p>Software Testing</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-graph-up-arrow"></i>
                  <p>Big Data</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-headset-vr"></i>
                  <p>Artificial Intelligence</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-code-slash"></i>
                  <p>Frontend Development</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-database-fill-up"></i>
                  <p>Data Warehousing and ETL</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-megaphone"></i>
                  <p>Digital Marketing</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-window-dash"></i>
                  <p>Operating Systems</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-phone"></i>
                  <p>Mobile Development</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-box-seam-fill"></i>
                  <p>Architecture & Design Patterns</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-braces"></i>
                  <p>Programming and Frameworks</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-card-list"></i>
                  <p>Project Management and Methodologies</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-database"></i>
                  <p>Databases</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-robot"></i>
                  <p>Robotic Process Automation</p>
                </div>

                <div className={`col col-md-2 col-sm-3 col-6 border ${styles["col"]}`}>
                  <i className="bi bi-bezier"></i>
                  <p>Blockchain</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="text-center mt-1">
          <button
            onClick={toggleRows}
            id="viewMoreBtn"
            className={`btn btn-lg btn-light ${styles["btn"]}`}
          >
            {expanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TopCategories;
