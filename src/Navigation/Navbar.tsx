import React, { useState } from "react";
import { Link } from 'react-router-dom';
import EmergeMenu from "./EmergeMenu";
import './navigation.css'
import "../fonts/airbnb-cereal-app-bold.ttf"


export default function Header() {
    const [expandMenu, setExpandedMenu] = useState(false)

    const showMenu = () => { setExpandedMenu(!expandMenu) }

    return (
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

                <div >
                    <EmergeMenu menu={expandMenu} />
                </div>
        </section >
    );
}
