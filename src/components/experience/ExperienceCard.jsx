import React from 'react';

import "./ExperienceCard.css"


const ExperienceCard = (props) => {
  
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
        <div class="card large sticky-action z-depth-0 experience-card">
        <div class="card-image waves-effect waves-block waves-light experience-image">
          <img class="activator" src={props.img}/>
        </div>
        <div class="card-content">
          <span class="card-title activator text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
          
          <h6><b>{props.company}</b></h6>
            <p>{props.dates}</p>
            <div style={{height: "20px"}}>
            </div>
            <p>{props.companyDescription}</p>
        </div>
        <div className="card-action right-align">
            <a href={props.companyURL} className="black-text btn-flat">Github<i className="fa fa-github black-text left"></i></a>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
    <       p>{props.roleDescription}</p>
            <h6><b><u>Highlights</u></b></h6>
          <ul class="bullets browser-default">
            { bulletPoints }
          </ul>

        </div>
      </div>
    )
}

export default ExperienceCard;
