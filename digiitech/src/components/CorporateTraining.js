import "./Styling/CorporateTraining.css";
import Image1 from "../assets/images/pencil-and-ruler.png";
import Image2 from "../assets/images/analytics.png";
import Image3 from "../assets/images/certificate.png";
import Image4 from "../assets/images/project.png";
import Image5 from "../assets/images/cloud-storage.png";
import Image6 from "../assets/images/support.png";
import training1 from "../assets/images/cisco.jpg";
import training2 from "../assets/images/tcs.jpg";
import training3 from "../assets/images/infosys.jpg";
import training4 from "../assets/images/mercedes.jpg";
import training5 from "../assets/images/visa.jpg";
import training6 from "../assets/images/kpmg.jpg";
import training7 from "../assets/images/wipro.jpg";
import training8 from "../assets/images/united.jpg";
import training9 from "../assets/images/organic.jpg";
import training10 from "../assets/images/online.jpg";
import training11 from "../assets/images/selfpaced.jpg";
import training12 from "../assets/images/blended.jpg";

const style1 = {
  filter:
    "invert(39%) sepia(63%) saturate(4102%) hue-rotate(350deg) brightness(98%) contrast(91%)",
};

const style2 = {
  marginLeft: "70px",
};

const style3 = {
  width: "780px",
};
const style4 = {
  width: "370px",
};

function CorporateTraining() {
  return (
    <>
      <div id="Ct1">
        <div className="corporate-training" id="corpTraining">
          <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container">
            <a className="navbar-brand" href="/">
              DigiiTech
            </a>
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">
                <i
                  className="bi bi-envelope-fill"
                  style={{ margin: "10px" }}
                ></i>
                digiitech@gmail.com<span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link active" href="/">
                <i
                  className="bi bi-telephone-fill"
                  style={{ margin: "8px" }}
                ></i>
                9876543219{" "}
              </a>
            </div>
            </div>
          </nav>

          <div className="container-fluid mt-5" id="trainingContainer">
            <div className="jumbotron text-left" id="trainingContent">
              <div className="container" id="imageContainer">
                <h2 id="heading_1" className="heading_1 mb-5">
                  CORPORATE TRAINING
                </h2>
                <p>
                  <span id="heading_2" className="heading_2 mb-5">
                    Workplace Learning that Works
                  </span>
                  <br />
                  <span id="heading_3">
                    Skill your workforce in new age technologies with our
                    cutting edge curriculum
                  </span>
                </p>
                <button type="button" id="trainingBtn" className="btn btn-lg">
                  Connect With Us
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid shadow pt-3">
            <div className="container" id="trustedBy">
              <div className="row" id="leftContent" style={{ width: "10rem" }}>
                Trusted By
              </div>
              <div className="row pb-3 border-0" id="rightContent">
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training1}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training2}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training3}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training4}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "6rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training5}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training6}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training7}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
                <div class="card border-0" style={{ width: "7rem" }}>
                  <img
                    src={training8}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "5rem", height: "40px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5" id="trainingNeeds">
            <h3 className="text-info align-center mb-5">
              Designed for all your Training Needs
            </h3>
            <div className="row" id="needCards">
              <div className="col">
                <div class="card shadow border-0" style={{ width: "16rem" }}>
                  <img
                    src={training9}
                    class="card-img-top"
                    alt="/"
                    style={{ width: "16rem", height: "200px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">On-Premise Classroom Training</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card shadow border-0" style={{ width: "16rem" }}>
                    <img
                      src={training10}
                      class="card-img-top"
                      alt="/"
                      style={{ width: "16rem", height: "200px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Instructor-Led Live, Online Training
                      </h5>
                    </div>
                  </div>
              </div>
              <div className="col">
                <div class="card shadow border-0" style={{ width: "16rem" }}>
                  <img
                    src={training11}
                    class="card-img-top"
                    alt="/"
                    style={{ width: "16rem", height: "200px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Self-Paced Online Training</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card shadow border-0" style={{ width: "16rem" }}>
                  <img
                    src={training12}
                    class="card-img-top"
                    alt="/"
                    style={{ width: "16rem", height: "200px" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">Blended Training</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* */}
      <div id="Ct">
        <div className="corpfeatures">
          <h2 className="heading py-5">
            Digii Shala Corporate Training Features
          </h2>
          <div className="container py-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 corpfeaturesmain">
              <div className="col-sm-6 col-xs-12 corpfeatleft">
                <a
                  className="featcardmain-right"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href="0"
                >
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img src={Image1} alt="" style={style1} />
                    </div>
                    <h3 className="featuretitle">Course Customization</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Flexible Engagement Model Tailor-Made for Your Needs
                  </p>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <img
                            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/course_customization.jpg"
                            alt="Course Features"
                            className="image"
                          />
                        </div>
                        <ul className=" coursefeatlist py-3">
                          <li>
                            <span>Content Customization as per Project</span>
                          </li>
                          <li>
                            <span>
                              Flexibility to Choose Location, Mode, and Dates
                            </span>
                          </li>
                          <li>
                            <span>
                              Technology Awareness Session for Senior Management
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="featcardmain-right" style={style2}>
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img
                        src={Image2}
                        alt="Learning Analytics - Corporate Training"
                        width="100%"
                        height="auto"
                        style={style1}
                      />
                    </div>
                    <h3 className="featuretitle">Learning Analytics</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Customized Dashboard to Visualize Training Progress
                  </p>
                  <div className="leftfeatcontentsec learnanalytics">
                    <span className="visible-xs closemodal">
                      <i className="icon-cross"></i>
                    </span>
                    <img
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/analytic.jpg"
                      alt="Course Features"
                      width="100%"
                      height="auto"
                    />
                    <ul className="coursefeatlist">
                      <li>
                        <span>Tracking of Learners’ Comparative Progress</span>
                      </li>
                      <li>
                        <span>Insights into Learning Effectiveness</span>
                      </li>
                      <li>
                        <span>Auto-Generated Reporting to Management</span>
                      </li>
                    </ul>
                  </div>
                </a>
                <a className="featcardmain-right">
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img
                        src={Image5}
                        alt="Cloud Lab - Corporate Training"
                        width="100%"
                        height="auto"
                        style={style1}
                      />
                    </div>
                    <h3 className="featuretitle">Cloud Labs</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Hands-On Experience on Edureka Cloud Lab, Pre-Configured to
                    Get Started Immediately
                  </p>
                  <div className="leftfeatcontentsec cloudlab">
                    <span className="visible-xs closemodal">
                      <i className="icon-cross"></i>
                    </span>
                    <img
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/cloud_lab.jpg"
                      alt="Course Features"
                      width="100%"
                      height="auto"
                    />
                    <ul className="coursefeatlist">
                      <li>
                        <span>Pre-Configured Ready to Use Environment</span>
                      </li>
                      <li>
                        <span>
                          Access CloudLab from anywhere through Edureka LMS
                        </span>
                      </li>
                      <li>
                        <span>
                          Real time environment with real world case studies
                        </span>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-xs-12 corpfeatright">
                <a className="featcardmain-left">
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img
                        src={Image6}
                        alt="24/7 Suport - Corporate Training"
                        style={style1}
                      />
                    </div>
                    <h3 className="featuretitle">24x7 Support</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Round-the-Clock Support by In-House Subject-Matter Experts
                  </p>
                </a>
                <a className="featcardmain-left mid">
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img
                        src={Image3}
                        alt="Certification - Corporate Training"
                        width="100%"
                        height="auto"
                        style={style1}
                      />
                    </div>
                    <h3 className="featuretitle">Certifications</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Industry Recognized Certification to Add Value to Your
                    Workforce
                  </p>
                  <div className="rightfeatcontentsec certification">
                    <span className="visible-xs closemodal">
                      <i className="icon-cross"></i>
                    </span>
                    <img
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/certification-1.jpg"
                      alt="Course Features"
                      width="100%"
                      height="auto"
                    />
                    <ul className="coursefeatlist">
                      <li>
                        <span>Strict Evaluation Process</span>
                      </li>
                      <li>
                        <span>Widely recognized certificate</span>
                      </li>
                      <li>
                        <span>Verifiable by Employer</span>
                      </li>
                    </ul>
                  </div>
                </a>
                <a className="featcardmain-left active">
                  <div className="header">
                    <div className="imgcont mx-3 py-4">
                      <img
                        src={Image4}
                        alt="Projects - Corporate Training"
                        width="100%"
                        height="auto"
                        style={style1}
                      />
                    </div>
                    <h3 className="featuretitle">Projects</h3>
                  </div>
                  <p className="featdesc mx-4 py-3">
                    Right Mix of Theoretical and Practical Training for Real
                    World Industry Problems
                  </p>
                  <div className="rightfeatcontentsec projects">
                    <span className="visible-xs closemodal">
                      <i className="icon-cross"></i>
                    </span>
                    <img
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/project.jpg"
                      alt="Course Feature"
                      width="100%"
                      height="auto"
                    />
                    <ul className="coursefeatlist">
                      <li>
                        <span>
                          Projects in Retail, Healthcare, Pharma, Aviation etc.
                        </span>
                      </li>
                      <li>
                        <span>Learners Choose Project as per Needs</span>
                      </li>
                      <li>
                        <span>Projects Evaluated for Certification</span>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-con">
          <div className="container-form">
            <div className="in-con">
              <header>Talk to our advisor</header>
              <form action="#">
                <div className="form first">
                  <div className="details personal">
                    <div className="fields">
                      <div className="input-field py-2" style={style3}>
                        <label>Name *</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="input-field" style={style4}>
                        <label>Company Name *</label>
                        <input
                          type="text"
                          placeholder="Enter Company Name"
                          required
                        />
                      </div>
                      <div className="input-field" style={style4}>
                        <label>Training Need*</label>
                        <select required>
                          <option disabled selected>
                            Select an Option
                          </option>
                          <option>For Corporate</option>
                          <option>For Myself</option>
                        </select>
                      </div>
                      <div className="input-field" style={style4}>
                        <label>Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="input-field py-2" style={style4}>
                        <label>Email ID *</label>
                        <input type="text" placeholder="Email ID" required />
                      </div>
                      <div className="input-field" style={style3}>
                        <label className="py-1">Query *</label>
                        <textarea
                          id="phone"
                          rows="2"
                          placeholder="Enter your query"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button className=" nextBtn">
                    <span className="btnText">Next</span>
                    <i className="uil uil-navigator"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CorporateTraining;
