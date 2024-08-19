import React from "react";
export default function Home() {
  return (
    <>
      <main className="mainHome">
        <div className="intro">
          <label className='text-light'>Hi there, I am</label>
          <h1>Zohaib Tariq</h1>
          <div className="labelAnimation">
            <h5 className="text-light">professional full stack developer.</h5>
          </div>
        </div>
        <div className="sidePic"></div>
      </main>
      <div className="mainStats">
        <div className="item1 item">
          <label>
            About <span>Me</span>
          </label>
          <p>
            I'm Zohaib Tariq, a creative web developer with 5+ years of
            experience crafting sleek, high-performing websites and apps. With a
            strong background in computer science and a knack for cutting-edge
            tech like React and Laravel php, I bring ideas to life with code.
            Let's create something amazing together!
          </p>
        </div>
        <div className="item2 item">
          <h2>My profile</h2>
          <div className="mypic2"></div>
          <h5 className="my-2">Zohaib Tariq.</h5>
          <div className="languageSection my-3">
            <div className="languageCircle">English</div>
            <div className="languageCircle">Urdu</div>
            <div className="languageCircle">Hindi</div>
          </div>
          <h6 className="text-light">Languages</h6>
          <div className="codingSkills">
            <h5>Front-End</h5>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="codingSkills">
            <h5>Back-End</h5>
            <div class="progress ">
              <div
                class="progress-bar backendProgress bg-success"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="codingSkills  ">
            <h5>Wordpress</h5>
            <div class="progress">
              <div
                class="progress-bar wordpressProgress bg-success"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="item3 item">
          <div className="experience">
            <h3>5+</h3>
            <p>Experience(y)</p>
          </div>
          <div className="clients">
            <h3>12+</h3>
            <p> Clients</p>
          </div>
        </div>
        <div className="item4 item">
          <h3>Social Links</h3>
          <div className="socialIcons">
                <a href="https://www.instagram.com/zohaibt.dev/"><i className="fa-brands fa-instagram Icon text-light" ></i></a>
                <a href="https://www.linkedin.com/in/zohaib-tariq-ab0a8627a/"><i className="fa-brands fa-linkedin-in Icon text-light" ></i></a>
                <a href="https://wa.me/+923195455250"><i className="fa-brands fa-whatsapp Icon text-light" ></i></a>
                <a href="mailto:businesswithzohaibt@gmail.com"><i className="fa-solid fa-envelope Icon text-light" ></i></a>
          </div>
        </div>
        <div className="item5 item">
          <h3> Technologies</h3>
          <div>
            <i className="fa-brands fa-react" id="lanLogos" ></i>
            <i className="fa-brands fa-bootstrap" id="lanLogos"></i>
            <i className="fa-brands fa-js" id="lanLogos"></i>
            <i className="fa-brands fa-html5" id="lanLogos"></i>
            <i className="fa-brands fa-css3-alt" id="lanLogos"></i>
            <i className="fa-brands fa-php" id="lanLogos"></i>
            <i className="fa-brands fa-laravel" id="lanLogos"></i>
          </div>
        </div>
      </div>
    </>
  );
}
