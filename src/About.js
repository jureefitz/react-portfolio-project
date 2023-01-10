import React from "react";
import "./About.css"

export default function Navigation() {
    return (
      <div className="Navigation">
      <ul class="row">  
       <li class="col">
        <span className="underline">About Me</span>
          <p className="About">Hello! My name is Juree, & I'm currently a student at SheCodes Workshop for women. I have completely fallen in love with learning web development & with more practice I am improving my skills each & everyday. <br />
          I've been interested in coding since before I truly understood what it was; I just knew I was extremely intrigued in how someone could build an entire website from scratch! <br />
          I'm so passionate & dedicated about continuing my journey expanding on my skills as a web developer.
          </p>
        </li>
      
      <li class="col skills">
        <span className="underline ">Skills</span>
         <li>
          API
         </li>
           <li>
           CSS3
         </li>
           <li>
           HTML5
          </li>
          <li>
           GitHub 
         </li>
         <li>
           Hosting
         </li>
          <li>
           React.js
         </li>
         <li>
           Bootstrap
         </li>
         <li>
           JavaScript  
         </li>
        </li>
        
        <li class="col">
          <span className="underline">Connect</span>
         <li>
          <a href="https://github.com/jureefitz" className="connect-link" target="_blank" rel="noopener noreferrer">GitHub</a>
         </li>
         <li>
          <a href="https://www.linkedin.com/in/juree-f-767338199/" className="connect-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         </li>
      </li> 
     </ul>
   </div>
    )
}