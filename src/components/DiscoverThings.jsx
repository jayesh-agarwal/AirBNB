import React from "react";
// import "../style.css";
import Experiences from "../airbnbimg/Experiences.jpg";
import onlineExperiences from "../airbnbimg/onlineExperiences.jpg";
import wanderlust from "../airbnbimg/wanderlust.jpg"
import "./DiscoverThings.css";

function DiscoverThings(){
    return <div className="DT-Outer">
         <div className="DT-Heading">
            <b>Discover Things</b>
        </div>
        <div>
            <div className="DT-Block">
                <img className="DT-Img" src ={Experiences} alt="Experiences"/>
                <p className="DT-img-captions">Outdoor getways</p>
                <p>Find unforgettable activities near you</p>
            </div>
            <div className="DT-Block">
                <img className="DT-Img" src ={onlineExperiences} alt="onlineExp"/>
                <p className="DT-img-captions">Outdoor getways</p>
                <p>Live, interactive activities led by Hosts.</p>
            </div>
            <div className="DT-Block">
                <img className="DT-Img" src ={wanderlust} alt="wanderlust"/>
                <p className="DT-img-captions">Outdoor getways</p>
                <p>Travel from home with Online Experiences.</p>
            </div>
        </div>
    </div>
}

export default DiscoverThings;