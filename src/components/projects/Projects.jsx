import React from "react";

import ProjectCard from "./ProjectCard"

import chirpblogImg from "./chirpblog_homepage.jpg"
import codingnomadsImg from "./codingnomads.png"
import userauthImg from "./userauth.png"

const Projects = (props) => {

    return(
        <div>
            <div className="container" id="projects">
                <h3>Some of my projects:</h3>
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectCard
                        title="Coding Nomads"
                        description="
                        A web app that extends functionality of the popular
                        open-source moodle platform.  The app manages relationships
                        between students and mentors.
                        "
                        img={codingnomadsImg}
                        bullets= {[
                            "Planned and developed Python-Flask RESTful endpoints",
                            "Created user authentication support with Flask-Login",
                            "Designed an admin panel with Flask-admin",
                            "Developed a comprehensive testing suite with Pytest",
                            "Contaerized application with Docker and Docker-Compose",
                        ]}
                        github = "#"
                        techUsed = "Python-Flask, Flask-Login, Flask-Admin, Pytest, Docker, Docker-Compose"
                        />
                    </div>
                    <div className="col s12 m6">
                        <ProjectCard
                        title="User Auth Microservice"
                        description="A microservice with Python and React.js 
                                    that allows users to create accounts and provides
                                    support for authentication."
                        img={userauthImg}
                        bullets= {[
                            "Back-end API built with Python Flask and Flask-Restplus",
                            "From-end login/logout functionality built with React.js and Axios",
                            "Client-side authentication with JWT tokens",
                            "Postgres database with SQL Alchemy ORM",
                            "Containerized with Docker and Docker-Compose",
                            "Testing suite with Pytest and React-testing-library"
                        ]}
                        github = "https://github.com/sessionsdev/user-auth-microservice"
                        />
                    </div>
                    <div className="col s12 m6">
                            <ProjectCard
                            title="Updog"
                            description="A single page instant messaging app similer to whatsapp
                                        Users can login, send messages, create chat groups,
                                        add friends, and block other users."
                            img="https://user-images.githubusercontent.com/15733809/68856616-f4d69080-06ae-11ea-93a6-789b5b7a7462.png"
                            bullets= {[
                                "Back-end API built with Python-Flask",
                                "User authentication implemented with Flask-Login",
                                "MySQL database with PONY ORM",
                                "Front-End developed with vanilla javascript and fetch",
                                "Successfully deployed with AWS using EC2 and RDS",
                            ]}
                            />
                        </div>
                    <div className="col s12 m6">
                        <ProjectCard
                        title="Chirp Blog"
                        description="
                        A public blogging app.  Users can create accounts, post
                        public messages and like other users posts.  
                        Users can follow other users to see a 
                        curated feed of friends posts."
                        img={chirpblogImg}
                        bullets={[
                            "Python Flask endpoints with server-side rendering of views",
                            "User authentication with Flask-Login",
                            "SQLite Database with SQL Alchemy ORM",
                        ]}
                        github="https://github.com/sessionsdev/chirpblog"
                        techUsed="Python-Flask, Flask-Login, SQL Alchemy, Jinja2 Templates, Materialize CSS"
                        />

                    </div>
                </div>
        </div>
    </div>
    )
}

export default Projects;