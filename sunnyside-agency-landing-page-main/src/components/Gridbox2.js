import React from 'react';
import '../css/style.css'

import Facebook from './Facebook.js';
import Insta from './Insta.js';
import Twitter from './Twitter.js';
import Pint from './Pinterest.js';
import cone from '../images/desktop/image-gallery-cone.jpg';
import imgGallery  from '../images/desktop/image-gallery-orange.jpg'
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg'
import milkbottles from '../images/desktop/image-gallery-milkbottles.jpg'; 
import Emily from '../images/image-emily.jpg';
import Thomas from '../images/image-thomas.jpg';
import Jennie from '../images/image-jennie.jpg';

//mobile images

import mobcon from '../images/mobile/image-gallery-cone.jpg';
import mobmilkbottles from '../images/mobile/image-gallery-milkbottles.jpg';
import moborange from '../images/mobile/image-gallery-orange.jpg';
import mobsugarcubes from '../images/mobile/image-gallery-sugar-cubes.jpg'; 

export default function Gridbox2() {
    return (
        <div>
             <div className="grid-box2">
       <div className="content">
         <h4 className="title-client"> Client testimonials</h4>
         <div className="flex-box">

           <div className="person1">
             <img src={Emily} alt="Emily" />
             <p className="paragraph-client">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
             <p className="name-client">Emily R.</p>
             <p className="role-client">Marketing Director</p>
           </div>

           <div className="person2">
             <img src={Thomas} alt="Thomas" />
             <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
             <p className="name-client">Thomas S.</p>
             <p className="role-client">Chief Operating Officer</p>
           </div>

           <div className="person3">
           <img src={Jennie} alt="Jennie" />
             <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
             <p className="name-client">Jennie F.</p>
             <p className="role-client">Business Owner</p>
           </div>
         </div>
       </div>

       <div className="modul3">
         <img className="imgmodul2" src={milkbottles} alt="milkbottles" /> 
         <img className="mobimgmodul2" src={mobmilkbottles} alt="mobmilkbottles" /> 
         </div>

       <div className="modul4">
         <img className="imgmodul2" src={imgGallery} alt="imgGallery" />
         <img className="mobimgmodul2" src={moborange} alt="moborange" />
          </div>

       <div className="modul5">
         <img className="imgmodul2" src={cone} alt="cone" />
         <img className="mobimgmodul2" src={mobcon} alt="mobcone" />
         </div>

       <div className="modul6">
         <img className="imgmodul2" src={sugarcubes} alt="sugarcubes" />
         <img className="mobimgmodul2" src={mobsugarcubes} alt="mobsugarcubes" />
          </div>

       <div className="footer">
         <div className="footer-text">
         <p className="footer-title">Sunnyside</p>
         <div className="links-footer">
           <p>About</p>
           <p>Services</p>
           <p>Projects</p>
         </div>
         
         <div className="media">
         <Facebook/>
         <Insta/>
         <Twitter/>
         <Pint/>
         </div>
          </div>
          </div>
     </div>
        </div>
    )
}
