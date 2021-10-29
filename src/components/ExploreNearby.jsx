import React from "react";
import NewDelhi from "../airbnbimg/newDelhi.jpg"
import Delhi from "../airbnbimg/Delhi.png"
import jaipur from "../airbnbimg/jaipur.png"
import gurugram from "../airbnbimg/gurugram.png"
import udaipur from "../airbnbimg/udaipur.jpg"
import Dehradun from "../airbnbimg/dehradun.jpg"
import Noida from "../airbnbimg/noida.jpg"
import mussoorie from "../airbnbimg/mussoorie.jpg"
import "./ExploreNearBy.css";


function ExploreNearby(){
    return <div className="outer">
        <div className="Heading">
            <b>Explore nearby</b>
        </div>
        <div>
            <div className="Block">
                <img className="imgLoc" src={NewDelhi} alt="newDelhi" />
                <p><b>New Delhi</b><br />4-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={Delhi} alt="Delhi" />
                <p><b>Delhi</b><br/>4-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={jaipur} alt="jaipur" />
                <p><b>Jaipur</b><br />15-minute drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={gurugram} alt="gurugram" />
                <p><b>Gurugram</b><br />3.5-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={udaipur} alt="udaipur" />
                <p><b>Udaipur</b><br />5-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={Dehradun} alt="dehradun" />
                <p><b>Dehradun</b><br />7.5-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={Noida} alt="noida" />
                <p><b>Noida</b><br />4.5-Hour drive</p>
            </div>
            <div className="Block">
                <img className="imgLoc" src={mussoorie} alt="mussoorie" />
                <p><b>Mussoorie</b><br />8-Hour drive</p>
            </div>

        </div>

        </div>
}

export default ExploreNearby;