import React from 'react';

import about from './about.png'
import './About.css'

const About = (props) => {
    return(
        <div>
            <div className="container section" id="about">
                <div class="row">
                <div class="col s12 l4">
                    <img src={about} alt="" class="responsive-img materialboxed about-img"/>
                </div>
                <div class="col s12 l6 offset-l2">
                    <h2 class="lime accent-1" style={{width: "fit-content"}}>I'm Jon Sessions</h2>                
                    <p className="flow-text">
                        A full-stack web developer.
                    </p>
                    <p className="flow-text">Eagerly seeking to use proven
                                            Web Development skills to build and
                                            maintain exciting products.</p>
                    <p className="flow-text">I believe great ideas can come from all directions and
                                            like to work with teams that allows contributors of all 
                                            levels to thrive and grow. </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;