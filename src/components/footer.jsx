import React from 'react'
import './Footerstyle.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';

function Footer(){
    var currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p className='footerP'>© {currentYear} Airbnb clone Privary · Terms · Sitemap · Company Details</p>
            <div className='icons'>
                <IconButton>
                    <LanguageRoundedIcon />
                    English
                </IconButton>
                <IconButton>
                    <FacebookIcon />
                </IconButton>
                <IconButton>
                    <TwitterIcon />
                </IconButton>
                <IconButton>
                    <InstagramIcon />
                </IconButton>
            </div>
        </div> 

    )
}

export default Footer;