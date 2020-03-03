import React from 'react';

import "./ProjectCard.css"


const ProjectCard = (props) => {
  
  let bullets = props.bullets
  let bulletPoints = []
  if (bullets !== undefined) {
    bulletPoints = bullets.map(function(bullet){
    return <li>{bullet}</li>
      })
  } else {
    bulletPoints = [
      <li>Bullet #1</li>,
      <li>Bullet #2</li>,
      <li>Bullet #3</li>,
    ]
  }


    return (
        <div class="card large sticky-action z-depth-0 project-card">
        <div class="card-image waves-effect waves-block waves-light project-image">
          <img class="activator" src={props.img}/>
        </div>
        <div class="card-content">
          <span class="card-title activator text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
          
          <p>{props.description}</p>
        </div>
        <div className="card-action right-align">
            <a href={props.github} className="black-text btn-flat">Github<i className="fa fa-github black-text left"></i></a>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
            <h6><b><u>Highlights</u></b></h6>
          <ul class="bullets browser-default">
            { bulletPoints }
          </ul>
          <h6><b><u>Tech Used</u></b></h6>
          <p>{props.techUsed}</p>

        </div>
      </div>
    )
}

export default ProjectCard;

