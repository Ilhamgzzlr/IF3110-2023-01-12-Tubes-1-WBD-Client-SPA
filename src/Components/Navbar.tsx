import React from "react";
import "../Css/Navbar.css";
import logo from "../Images/logo.png";
import person from "../Images/person.svg";



import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container container-flex">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <nav>
                    <div className="list">
                        <NavLink to="/" className="listItem">Home</NavLink>
                        <NavLink to="/author" className="listItem" >Your Songs</NavLink>
                        <NavLink to="/playlist" className="listItem" >Playlist</NavLink>
                        <NavLink to="/subs" className="listItem" >Subscription</NavLink>
                    </div>
                </nav>

                <div className="icon">
                    <img src={person} alt="person" className="person" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;