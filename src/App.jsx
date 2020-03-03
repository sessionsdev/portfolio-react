import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import M from 'materialize-css'

import NavBar from "./components/navbar/NavBar"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import Hobbies from "./components/hobbies/Hobbies"
import Contact from "./components/contact/Contact"

import "./App.css"



class App extends Component {
    constructor() {
        super();
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateDimensions()
        M.AutoInit()
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }


    updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    sendEmail = (data) => {
        console.log(data)
    }



    render() {
        return (
            <div>

                <NavBar 
                height={this.state.height}
                width={this.state.width}
                />



            <About />


            <Projects />


            <Contact 
            sendEmail={this.sendEmail}
            />

                <div class="footer-copyright grey lighten-2 black-text">
                <div class="container center-align">&copy; 2020 SessionsDev</div>
                </div>

            </div>

        )
    }

}

export default App