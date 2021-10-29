import React from "react";
import OutDoor from "../airbnbimg/outdoorGetaways.jpg";
import petsAllowed from "../airbnbimg/petsAllowed.jpg";
import UniqueStays from "../airbnbimg/uniqueStays.jpg";
import entireHomes from "../airbnbimg/entirehomes.jpg";
// import "../style.css"
import "./LiveAnywhere.css";

function LiveAnywhere(){
    return <div className="LAOuter">
        {/* <h1>hello world</h1> */}
        <div className="LAHeading">
            <b>Live Anywhere</b>
        </div>
        <div>
            <div className="LABlock">
                <img className="LAImgLoc" src={OutDoor} alt="outdoor getways" />
                <p className="LAimgCaption">Outdoor getways</p>
            </div>
            <div className="LABlock">
                <img className="LAImgLoc" src={UniqueStays} alt="unique stays" />
                <p className="LAimgCaption">Unique stays</p>
            </div>
            <div className="LABlock">
                <img className="LAImgLoc" src={entireHomes} alt="entire homes" />
                <p className="LAimgCaption">Entire homes</p>
            </div>
            <div className="LABlock">
                <img className="LAImgLoc" src={petsAllowed} alt="Pets allowed" />
                <p className="LAimgCaption">Pets allowed</p>
            </div>
        </div>
    </div>
}

export default LiveAnywhere;