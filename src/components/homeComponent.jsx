import React from "react";
import {Link} from "react-router-dom";
import "../styles/homeComponent.css";

const HomeComponent=()=>{
    return(
        <div className="home-wrapper">
            <p>Work in progress. To bry the beta version click the link below.</p>
            <Link to="/create-resume">Create Resume</Link>
            <div className="section-one"></div>
            <div className="section-two"></div>
        </div>
    )
}

export default HomeComponent;