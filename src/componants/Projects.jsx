import React from 'react'
import prj3 from './video/project3.webm'
import prj2 from './video/project2.webm'
import carRental from './prj2.png';
export default function Projects() {
  // const showDetail=()=>{
  //   const prjs=document.querySelectorAll('.prjDetail');
  //   prjs.forEach(prj=>{
  //     prj.classList.add('test');
  //   if (!prj.querySelector('h4')) {
  //     const h4 = document.createElement('h4');
  //     h4.textContent = 'Detail of project';
  //     h4.classList.add('prjHeading');
  //     prj.appendChild(h4);
  //   }
  // }
  //   )
    
  // const hideDetail=()=>{
  //   document.querySelector('.prjDetail').classList.remove('test');
  //   const h4=document.querySelector('.prjHeading');
  //   if (h4) {
  //     h4.remove();
  //   }
  // }
  // const prjs = document.querySelectorAll('.prjDetail');

  //   prjs.forEach(prj => {
  //     prj.addEventListener('mouseover', () => {
  //       prj.classList.add('test');
  //       const h4 = prj.querySelector('.prjHeading');
  //       if (!h4) {
  //         const newH4 = document.createElement('h4');
  //         newH4.textContent = 'Detail of project';
  //         newH4.classList.add('prjHeading');
  //         prj.appendChild(newH4);
  //       }
  //       prj.classList.add('show-detail');
  //     });

  //     prj.addEventListener('mouseleave', () => {
  //       prj.classList.remove('test');
  //       prj.classList.remove('show-detail');
  //       const h4 = prj.querySelector('.prjHeading');
  //       if (h4) {
  //         h4.remove();
  //       }
  //     });
  //   });
  return (
    <>
      <main className="projectMain">
        <div className="projectsSec">
          <h3>Some Recent Projects</h3>
          <div className="project">
            <div className="img">
              <video controls loop muted>
                <source src={prj3} type='video/mp4'/>
              </video>
            </div>
            <div className="detail">
              <h5>OpenSooq</h5>
              <p>OpenSooq is one of the top classified ad websites allowing users, whether buyers or sellers, to buy and sell various services, products, and goods. My most recent and greatest project all time. With login/signup/message functionalities<br/> 
              <span>React Js and Laravel Php</span>
              </p>
            </div>
          </div>
          <div className="project">
          <div className="detail detail2">
              <h5>Ecommerce website</h5>
              <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. Developed by me in last year 2023<br/> 
              <span>Wordpress Elementor|Woocommerce</span>
              </p>
            </div>
            <div className="img img2">
              <video loop muted controls>
                <source src={prj2} type='video/mp4'/>
              </video>
            </div>
            
          </div>
          <div className="project">
            <div className="img1">
              <img src={carRental} alt='error'/>
            </div>
            <div className="detail">
              <h5>Car Rental Services website</h5>
              <p>Experience the convenience of renting a car with ease through our intuitive platform. Our car rental website offers a wide range of vehicles, from economy to luxury, tailored to meet your needs. Developed in  2023<br/> 
              <span>React Js|Php with mysql</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}