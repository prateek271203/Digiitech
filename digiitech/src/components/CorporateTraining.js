import './CorporateTraining.css';
import training1 from "/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/cisco.jpg";
import training2 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/tcs.jpg';
import training3 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/infosys.jpg';
import training4 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/mercedes.jpg';
import training5 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/visa.jpg';
import training6 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/kpmg.jpg';
import training7 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/wipro.jpg';
import training8 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/united.jpg'
import training9 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/organic.jpg';
import training10 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/online.jpg';
import training11 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/selfpaced.jpg';
import training12 from '/Users/aayushisaraswat/Digiitech/digiitech/src/assets/images/blended.jpg';

function App() {
  return (
    <>
    <div className="corporate-training" id='corpTraining'>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="/">DigiiTech</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/"><i className="bi bi-envelope-fill"></i>digiitech@gmail.com<span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link active" href="/"><i className="bi bi-telephone-fill"></i>9876543219 </a>
        </div>
      </nav>

      <div className="container-fluid mt-5" id="trainingContainer">
        <div class="jumbotron text-left" id="trainingContent" >
          <div class="container" id="imageContainer">
          <h2 id="heading_1" className="heading_1 mb-5">CORPORATE TRAINING</h2>
              <p>
                <span id="heading_2" className="heading_2 mb-5">Workplace Learning that Works</span><br />
                <span id="heading_3">Skill your workforce in new age technologies with our cutting edge curriculum</span>
              </p>
              <button type="button" id="trainingBtn" class="btn btn-lg">Connect With Us</button>
          </div>
        </div>
      </div>

      <div className="container border-bottom" id="trustedBy">
        <div className="row" id="leftContent" style={{width:'12rem'}}>Trusted By</div>
        <div className="row" id="rightContent">
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training1} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training2} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training3} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training4} class="card-img-top" alt="..." style={{width:'6rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training5} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training6} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training7} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        <div class="card border-0" style={{width:'7rem'}}>
          <img src={training8} class="card-img-top" alt="..." style={{width:'5rem', height: '40px'}}/>
        </div>
        </div>
      </div>

      <div className="container mt-5" id="trainingNeeds">
        <h2 className="text-info align-center mb-5">Designed for all your Training Needs</h2>
        <div className="row" id="needCards">

          <div class="card" style={{width:'16rem'}}>
              <img src={training9} class="card-img-top" alt="/"
              style={{width:'16rem', height: '200px'}}/>
              <div class="card-body">
                  <h5 class="card-title">On-Premise Classroom Training</h5>
              </div>
          </div>
          <div class="card" style={{width:'16rem'}}>
              <img src={training10} class="card-img-top" alt="/"
              style={{width:'16rem', height: '200px'}}/>
              <div class="card-body">
                  <h5 class="card-title">Instructor-Led Live, Online Training</h5>
              </div>
          </div>
          <div class="card" style={{width:'16rem'}}>
              <img src={training11} class="card-img-top" alt="/"
              style={{width:'16rem', height: '200px'}}/>
              <div class="card-body">
                  <h5 class="card-title">Self-Paced Online Training</h5>
              </div>
          </div>
          <div class="card" style={{width:'16rem'}}>
              <img src={training12} class="card-img-top" alt="/"
              style={{width:'16rem', height: '200px'}}/>
              <div class="card-body">
                  <h5 class="card-title">Blended Training</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

