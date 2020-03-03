import React from 'react';


import './NavBar.css'
import header from './header.png'



const NavBar = (props) => {

    const isMobile = props.width < 670;


    const headerStyles = {
        background: `url(${header}) no-repeat center`,
        backgroundSize: 'cover',
        height: props.height-10,
        width: "auto"
    }

    const mobileHeaderStyles = {
        background: `url(${header}) no-repeat center`,
        backgroundSize: 'cover',
        height: props.height / 1.50,
        width: "auto"
    }


    return (

        <div>
            <header style={isMobile ? mobileHeaderStyles : headerStyles}>


                <nav className="nav-wrapper blue darken-4">
                    <div className="container">
                        <a href="" className="brand-logo white-text center">Jon Sessions</a>
                        <a href="" class="sidenav-trigger" data-target="mobile-nav">
                            <i class="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#about" className="white-text">About Me</a></li>
                            <li><a href="#projects" className="white-text">Some Projects</a></li>
                            <li><a href="#contact" className="white-text">Contact Me</a></li>
                                
                        </ul>
                        <ul className="sidenav grey lighten-2" id="mobile-nav">
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#projects">Some Projects</a></li>
                            <li><a href="#contact">Contact Me</a></li>

                            
                        </ul>
                    </div>
                </nav>



            </header>
        


            <ul className="sidenav black-text" id="mobile-nav">
                <li><a href="#">About Me</a></li>
                <li><a href="#">External Links</a></li>
            </ul>
        </div>
    )
}

export default NavBar