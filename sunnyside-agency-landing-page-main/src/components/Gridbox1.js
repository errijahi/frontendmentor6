import React from 'react';
import '../css/style.css';

import Hamburger from './Hamburger';
import glass from '../images/desktop/image-stand-out.jpg';
import egg from '../images/desktop/image-transform.jpg';
import arrow from '../images/icon-arrow-down.svg';
import mobegg from '../images/mobile/image-transform.jpg';
import mobglass from '../images/mobile/image-stand-out.jpg';


export default function Gridbox1() {
    return (
<div>
<div className="grid-box1">
 
 <div className="banner">
 <div className="header">
   <div className="navbar-box">
 <p className ="right">Sunnyside</p>
 <Hamburger />
 <ul className="left">
   <p className="header-text">About</p>
   <p className="header-text">Services</p>
   <p className="header-text">Projects</p>
   <p className="contact">Contact</p>
   </ul>
  </div>

   <h1 className="title">We are creatives</h1>
   <img className="arrow" src={arrow} alt="arrow" />
   </div>
 </div>

 <div className="block-text block-text1"> 
   <div className="text-box">
   <h1 className="text-box-title">Transform your brand</h1>
   <p className="text-box-paragraph">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
   <a className="text-box-link"  href="#">Learn more </a>
   <div className="line1-2 line"></div>
   </div>
   </div>

 <div className="module2">
   <img className="img" src={egg} alt="egg" />
   <img className="mobimg" src={mobegg} alt="mobegg" />
   </div>

 <div className="module3">
   <img className="img" src={glass} alt="glass" />
   <img className="mobimg" src={mobglass} alt="mobglass" />
   </div>

 <div className="block-text  block-text2">  
   <div className="text-box">
   <h1 className="text-box-title">Stand out to the right audience</h1>
   <p className="text-box-paragraph"> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
   <div className="link-hover2">
   <a className="text-box-link" href="#">Learn more </a>
   <div className="line1-2 line2"></div>
   </div>
   </div>
   </div>
 
 <div className="img1-2 img1">
   <div className="text1"><h1>Graphic design </h1><p> Graphic design Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
   </div>
   </div>

 <div className="img1-2 img2">
   <div className="text1"><h1>Photography </h1><p> Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
 </div>
 </div>
 </div>
 </div>
)
}
