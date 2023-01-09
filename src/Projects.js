import React from "react";
import "./Projects.css"

export default function Projects() {
    return (
        <div className="Projects">
        <div class="row">
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Vanilla Javascript</h5>
                    <p class="card-text">Vanilla Landing Page</p>
                    <a href="https://www.shecodes.io/workshops/shecodes-online-workshop-70-0/projects/386412" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Vanilla Javascript</h5>
                    <p class="card-text">Vanilla Weather App</p>
                    <a href="https://rainbow-mandazi-1316a6.netlify.app/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning">View</a>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">React</h5>
                    <p class="card-text">React Weather App</p>
                    <a href="https://gregarious-bubblegum-7e0562.netlify.app/?" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning">View</a>
                </div>
                </div>
            </div>
         </div>        
        </div>
    )
}