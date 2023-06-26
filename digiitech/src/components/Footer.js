 import React, { useState} from 'react';
 import './Footer.css';
 import LogoImage from '../assets/images/logo.jpg';
 import GoogleImage from '../assets/images/google_play.jpg';
 import AppImage from '../assets/images/app_store.jpg'

  
 function Footer(){
   
    const [showDropContent, setShowDropContent] = useState(false);

    const handleDropButtonClick = () => {
    setShowDropContent(!showDropContent);
    };

    return(
        <div className="container-fluid">
            <div className="footer-content">
                <div className="row">
                    <div class="col-md-3">
                        <img className="logoimage" src={LogoImage} alt="Logo"/>
                        <h5>DigiiTech</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <h5>TRENDING CERTIFICATION COURSES</h5>
                        <ul>
                            <li>DevOps Certification Training Course</li>
                            <li>AWS Solutions Architect Certification Training Course</li>
                            <li>Big Data Hadoop Certification Training Course</li>
                            <li>Tableau Certification Training Course</li>
                            <li>Data Science with Python Certification Training Course</li>
                            <li>Selenium Certification Training Course</li>
                            <li>PMP Certification Training Course</li>
                            <li>RPA using UiPath Certification Training Course</li>
                            <li>Apache Spark and Scala Certification Training Course</li>
                            <li>Microsoft Power BI Certification Training Course</li>
                            <li>Java Certification Training Course</li>
                            <li>Python Certification Training Course</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>TRENDING MASTER COURSES</h5>
                        <ul>
                            <li>Data Science Training Masters Program</li>
                            <li>DevOps Engineer Masters Program</li>
                            <li>Cloud Architect Masters Program</li>
                            <li>Big Data Masters Program</li>
                            <li>AI and Machine Learning Masters Program</li>
                            <li>Full Stack Web Developer Masters Program</li>
                            <li>Business Intelligence Masters Program</li>
                            <li>Data Analytics Masters Program</li>
                            <li>Automation Testing Engineer Masters Program</li>
                            <li>Post Graduate Diploma in Artificial Intelligence Course</li>
                            <li>Post Graduate Program in DevOps</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>COMPANY</h5>
                        <ul>
                            <li>About Us</li>
                            <li>News & Media</li>
                            <li>Reviews</li>
                            <li>Contact Us</li>
                            <li>Webinars</li>
                            <li>Blog</li>
                            <li>Community</li>
                            <li>Locations</li>
                            <li>Sitemap</li>
                            <li>Blog Sitemap</li>
                            <li>Community Sitemap</li>
                            <li>City Sitemap</li>
                            <li>Corporate Training</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>WORK WITH US</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Become an Instructor</li>
                            <li>Become an Affiliate</li>
                            <li>Become a Partner</li>
                            <li>Hire from Edureka</li>
                            <li id="download">DOWNLOAD APP</li>
                            <li><img className="downloadimage" src={GoogleImage} alt="App" /></li>
                            <li><img className="downloadimage" src={AppImage} alt="App" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drop-categories">
                <h3 className="drop-title">Categories</h3>
                <button id="dropButton" onClick={handleDropButtonClick}>
                    <i class="bi bi-caret-down-fill"></i>
                    </button>
                {showDropContent && (
                <div id="dropContent" className="hiddenContent">
                    <h5>aghecvwksefhabewshfbcyeawbsrfiebrkhvgrehvbjehrsbf vjhebrschbefhb</h5>
                    <h5>hgckwghesckjhwehfbcvihwebhcd</h5>
                </div>
                )}
            </div>
        </div>
    );
 }

 export default Footer;