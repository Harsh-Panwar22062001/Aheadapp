import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="lonav">
          <div className="logo">
            <img src="applogo.webp" alt="App Logo" className="logo-image" />
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <a href="#emotions">Emotions</a>
              </li>
              <li>
                <a href="#manifesto">Manifesto</a>
              </li>
              <li>
                <a href="#self-awareness">Self-awareness-test</a>
              </li>
              <li>
                <a href="#work-with-us">Work With Us</a>
              </li>
              <li>
                <button className="download-button">Download App</button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-container">
          <div className="hero-section"></div>
          <div className="card">
            <div className="left">
              <div className="header-content">
                <h4>Ahead App</h4>
                <h1>
                  {" "}
                  <span>Master your life</span> <span>by mastering </span>{" "}
                  <span>emotions</span>
                </h1>
                <div className="eor">
                  <img src="Down.svg.webp" alt="" srcset=""  className="uiy" />
                  <img src="star.png" alt="" srcset="" className="pout" />
                  <img src="star.png" alt="" srcset=""  className="pout" />
                  <img src="star.png" alt="" srcset=""   className="pout" />

                </div>
               
              </div>

              <p className="iuo">100+ AppStore Reviews</p>
            </div>
            <div className="right">
              
            </div>
            <div className="smartphone-container">
  <img src="smartphone.webp" alt="" srcSet="" className="image-op" />
  <div className="circle">
  
    <img src="2.png" alt="" srcset="" />
    
    <img src="4.png" alt="" srcset="" />

    <img src="1.png" alt="" srcset="" />


  </div>
 



  </div>

  
</div>

<div className="fg">



<h2>Be the best you <span> With EQ</span></h2>
<h2>Not having your own emotions <span>under controls might be holding</span> <span>you back</span> </h2>
<h2>Addtionally, not understanding <span>those of others stops you from</span> <span> being parent ,friend can be</span></h2>
</div>




          </div>



        
        </div>
      </div>
    
  );
};

export default Hero;
