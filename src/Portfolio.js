import React from "react";
import Projects from "./Projects";
import About from "./About";
import "./Portfolio.css"


export default function Portfolio (){

return(
<div className="Portfolio">
  
    <h1>Hi, I'm <span class="badge bg-secondary">
      Juree!
      </span>
    </h1>
    <h2>I am a <span class="badge bg-secondary">
      Front-End Develover
      </span>
    </h2>
    <h3>Welcome to my <span class="badge bg-secondary">
      Portfolio of Projects!
      </span>
    </h3>  
  <Projects />
  <About />
 </div>
)
}