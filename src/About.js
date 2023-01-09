import React from "react";
import "./About.css"

export default function Navigation() {
    return (
      <div className="Navigation">
      <ul class="row">  
       <li class="col">
        <span className="underline">About Me</span>
          <p className="About">Hello! 
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