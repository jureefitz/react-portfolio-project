import React from "react";
import "./About.css"

export default function Navigation() {
    return (
      <div className="Navigation">
      <ul class="row">  
       <li class="col">
        <span className="underline">About</span>
          <p>Hello!</p>
        </li>
      
      <li class="col">
        <span className="underline">Skills</span>
         <li>
          JavaScript
         </li>
           <li>
           React.js
         </li>
            <li>
            HTML5
          </li>
          <li>
            CSS3
         </li>
          <li>
            API
         </li>
         <li>
           Bootstrap
         </li>
         <li>
            GitHub
         </li>
        </li>
        
        <li class="col">
          <span className="underline">Connect</span>
         <li className="connect">
          hello!
         </li>
      </li> 
     </ul>
   </div>
    )
}