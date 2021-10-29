import React from "react";
import "./menu.css";

function Menu() {
    return <div className="Menu">
        <div className="Menu-Block">
            <ul>
                <li><b>About</b></li>
                <li>How Airbnb works</li>
                <li>Newsroom</li>
                <li>Airbnb 2021</li>
                <li>Investors</li>
                <li>Airbnb Plus</li>
                <li>Airbnb Luxe</li>
                <li>HotelTonight</li>
                <li>Airbnb for Work</li>
                <li>Made possible by Hosts</li>
                <li>Careers</li>
                <li>Founders' Letter</li>
            </ul>
        </div >
        <div className="Menu-Block">
        <ul>
                <li><b>COMMUNITY</b></li>
                <li>Diversity and Belonging</li>
                <li>Accessibility</li>
                <li>Airbnb Associates</li>
                <li>Host Afghan Refugees</li>
                <li>Guest Referrals</li>
                <li>Airbnb.org</li>
            </ul>
        </div>
        <div className="Menu-Block">
        <ul>
                <li><b>Host</b></li>
                <li>Host your home</li>
                <li>Host an Online Experience</li>
                <li>Host an Experience</li>
                <li>Responsible hosting</li>
                <li>Resource Centre</li>
                <li>Community Centre</li>
            </ul>
        </div>
        <div className="Menu-Block">
        <ul>
                <li><b>Support</b></li>
                <li>Our COVID-19 Response</li>
                <li>Help Centre</li>
                <li>Cancellation options</li>
                <li>Neighbourhood Support</li>
                <li>Trust and Safety</li>
            </ul>
        </div>

    </div>
}

export default Menu;