import React from "react";

import ExperienceCard from "./ExperienceCard"

import itmImg from "./itm.png"

const Experience = (props) => {

    return(
        <div>
            <div className="container">
                <div className="row">
                        <div className="col s12 m6 l4">
                            <ExperienceCard
                            title="Operations Manager"
                            company="International Tool Manufacturing"
                            dates="02/2015 - 04/2019"
                            companyDescription="A New York City based tool distributor serving
                                                the construction industry"
                            img={itmImg}
                            roleDescription="
                            Managed the day to day operations of ITM, a small family
                            owned tool distribution company founded over 30 years ago.
                            I was directly responsible or involved with nearly every
                            aspect of the business.
                            "
                            bullets= {[
                                "Managed order fulfillment and customer service for 300+ customers",
                                "Managed relationships with 25+ vendors and the biggest customers",
                                "Responsible for purchasing and control of 2,000+ inventory items",
                                "Oversaw shipping and receiving logistics operations",
                                "Created proceedures and processes to improve efficiency and order fulfillment accuracy",
                            ]}
                            companyURL=""
                            />
                        </div>
                        <div className="col s12 m6 l4">
                            <ExperienceCard
                                title=""
                                company=""
                                dates=""
                                companyDescription=""
                                img=""
                                roleDescription=""
                                bullets= {[
                                ]}
                                companyURL=""
                            />
                        </div>
                        <div className="col s12 m6 l4">
                            <ExperienceCard
                                title=""
                                company=""
                                dates=""
                                companyDescription=""
                                img=""
                                roleDescription=""
                                bullets= {[
                                ]}
                                companyURL=""
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Experience;