import React from "react";

import ProjectCard from "../projects/ProjectCard"

const Hobbies = (props) => {

    return(
        <div>
            <div className="container">
                <div className="row">
                        <div className="col s12 m4">
                            <ProjectCard
                            title="Project 1"
                            description="Project 1 description"
                            img="https://picsum.photos/200"
                            bullets= {[
                                "Test bullet #1",
                                "Test bullet #2",
                                "Test bullet #3",
                            ]}
                            />
                        </div>
                        <div className="col s12 m4">
                            <ProjectCard
                            title="Project 1"
                            description="Project 1 description"
                            img="https://picsum.photos/200"
                            bullets= {[
                                "Test bullet #1",
                                "Test bullet #2",
                                "Test bullet #3",
                            ]}
                            />
                        </div>
                        <div className="col s12 m4">
                            <ProjectCard
                            title="Project 1"
                            description="Project 1 description"
                            img="https://picsum.photos/200"
                            bullets= {[
                                "Test bullet #1",
                                "Test bullet #2",
                                "Test bullet #3",
                            ]}
                            />
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Hobbies;