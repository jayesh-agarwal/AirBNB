import React from "react";
import logo from "../airbnbimg/logo.png"
// import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
// import { Icon } from "@material-ui/core";
// import AppsIcon from "@material-ui/icons/Apps"
import { IconButton } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import "../style.css"
// import { green } from "@material-ui/core/colors";

function Header() {
    return <div className="header">
        <img className="logoImg" src={logo} alt="logo" />
        <div className="searchBar">
            <input  className="searchInput" type="text" placeholder="start your search"    />           
            <IconButton>
                <SearchIcon />
            </IconButton>
        </div>
        <IconButton style={{ color: "black", fontSize: "20px", paddingTop: "40px", float: "left", marginLeft: "120px" }}>
            Become a Host
        </IconButton>
        <IconButton>
            <div style={{ paddingTop: "30px", float: "left" }}><LanguageIcon /></div>
        </IconButton>
        <div className="login">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <IconButton>
                <PersonIcon />
            </IconButton>

        </div>

    </div>
}


export default Header;