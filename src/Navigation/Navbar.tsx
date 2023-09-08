import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import './navigation.css'
import "../fonts/airbnb-cereal-app-bold.ttf"


export default function Header() {
    const [expandMenu, setExpandedMenu] = useState<boolean>(false)
    const showMenu = () => { setExpandedMenu(!expandMenu) }
    const closeMenu = () => { setExpandedMenu(false) }

    return (
        <>
            <section className="wrapper">
                <div className="navigation">
                    <div className="title">
                        <section className="menuButton" onClick={showMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </section>
                        <em className="siteName">Tasty&Zesty</em>
                    </div>
                    <div className="takeSpase"></div>
                    <div className="pintedInfo">
                        <Link className="" to="/">Home</Link>
                        <Link className="" to="/login">Login</Link>
                    </div>
                </div>
            </section >
            {
                expandMenu &&
                <>
                    <div className="sidenav">
                    <section className="closeBth" onClick={closeMenu}>
                        <div className="leftrigth"></div>
                        <div className="rightleft"></div>
                        <label className="close">close</label>
                    </section>
                    <div className="sideLinkNav">
                        <Link to="/">Home</Link>
                        <Link to="">Ratings</Link>
                    </div>
                    </div>
                </>
            }
        </>
    );
}
