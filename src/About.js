import React from "react";
import "./About.css"

export default function Navigation() {
    return (
      <div className="Navigation">
      <ul class="row">  
       <li class="col">
        <span className="underline">About Me</span>
          <p className="About">Hello! My name is Juree, and I'm currently a student at SheCodes Workshop for women! I have compelety fallen in love with web development and with more practice, I am improving my skills each and everyday. <br />
          I've been intrigued about coding since before I truly understood what it was; I just knew I was extremely interested in how someone could build an entire website from scrath! <br />
          I'm so excited and passionate about continuing my journey progressing my skills to become a better web developer! 
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