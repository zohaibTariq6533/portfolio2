import React from 'react'
import vid from './video/skillsbg.mp4'
export default function Skills() {
  return (
    <>
      <main className='skillsMain'>
        <video className='videoBg' autoPlay loop muted>
          <source src={vid} type="video/mp4"/>
        </video>
        <div className="mainSec container">
          <div className='mainDivs'>
            <h2 className='skillsTitle'>Front End</h2>
            <div className="frontendDetail ">
              <div>
                <h6>Scripts/Languages:</h6>
                <p>Html,Css,Javascript</p>
                <h6>Framework/Lib:</h6>
                <p>React,Bootstrap,Tailwind</p>
                <h6>Experty Level</h6>
                <div class="progress" id='progress'>
                  <div class="progress-bar bg-success"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    id='progressBar'></div>
                </div>
                
              
            </div>
            </div>
              <div className="logoSec">
                <i className="fa-brands fa-react" id="lanLogos" ></i>
                <i className="fa-brands fa-bootstrap" id="lanLogos"></i>
                <i className="fa-brands fa-js" id="lanLogos"></i>
                <i className="fa-brands fa-html5" id="lanLogos"></i>
            <i className="fa-brands fa-css3-alt" id="lanLogos"></i>
              </div>
          </div>
          <div className='mainDivs'>
          <h2 className='skillsTitle'>Back End</h2>
          <div className="backendDetail ">
              <div>
                <h6>Scripts/Languages:</h6>
                <p>Php,Java</p>
                <h6>Framework/Lib:</h6>
                <p>laravel,Servlet</p>
                <h6>Experty Level</h6>
                <div class="progress" id='progress'>
                  <div class="progress-bar bg-success backendProgress"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    id='backendprogressBar'></div>
                </div>
                
              
            </div>
            </div>
              <div className="logoSec">
              <i className="fa-brands fa-php" id="lanLogos"></i>
              <i className="fa-brands fa-laravel" id="lanLogos"></i>
              <i className="fa-brands fa-java" id="lanLogos"></i>
              </div>
          </div>
          <div className='mainDivs'>
          <h2 className='skillsTitle'>WordPress</h2>
          <div className="backendDetail ">
              <div>
                <h6>Plugins</h6>
                <p>Elementor,Woocommerce, stripe</p>
                <h6>Themes</h6>
                <p>Astra,Divi,Avada</p>
                <h6>Experty Level</h6>
                <div class="progress" id='progress'>
                  <div class="progress-bar bg-success wordpressProgress"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    id='wordpressprogressBar'></div>
                </div>
                
              
            </div>
            </div>
              <div className="logoSec">
              <i className="fa-brands fa-wordpress" id="lanLogos"></i>
              {/* <i className="fa-solid fa-woocommerce" id="lanLogos"></i> */}
              <i className="fa-brands fa-elementor" id="lanLogos"></i>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}
