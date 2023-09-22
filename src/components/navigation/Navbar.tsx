import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectAuthenticatedUser } from "../../app/store/slices/selectors";
import "../../fonts/airbnb-cereal-app-bold.ttf";
import './navigation.css';



export default function Header() {
    const [expandMenu, setExpandedMenu] = useState<boolean>(false)
    const showMenu = () => { setExpandedMenu(!expandMenu) }
    const closeMenu = () => { setExpandedMenu(false) }
    const isAuth = useSelector(selectAuthenticatedUser)
    const location = useLocation()
    const navigation = useNavigate()

    useEffect(() => {
        const paths = ['/login', '/register']
        if (isAuth && paths.includes(location.pathname)) {
            navigation('/')
        }
    }, [isAuth, location])

    return (
        <>
            <section className="navWrapper">
                <div className="navNavigation">
                    <div className="navTitle">
                        <section className="navMenuButton" onClick={showMenu}>
                            <div className="navMenuButtonBar1"></div>
                            <div className="navMenuButtonBar2"></div>
                            <div className="navMenuButtonBar3"></div>
                        </section>
                        <img height="45" src="/public/icons/title-icon (2).png" />
                        <Link to="/" className="navSiteName"><em>Tasty&Zesty</em></Link>
                    </div>
                    <div className="navTakeSpace"></div>
                    <div className="navPintedInfo" >
                        {isAuth ?
                            <button className="navLogoutBtn">LogOut</button>
                            :
                            <div>
                            {/* <Link className="navSearchIcon" to="/login"><img height="50" src="/icons/pan.png" /></Link> */ }
                            <Link  className="navLogIn" to='/login'>LogIn</Link>
                            </div>
                    }
                </div>
            </div>
        </section >
        {
            expandMenu &&
            <>
                <div className="sideNav">
                    <section className="sideNavCloseBth" onClick={closeMenu}>
                        <div className="sideNavLeftRigth"></div>
                        <div className="sideNavRightLeft"></div>
                        <label className="sideNavClose">close</label>
                    </section>
                    <em className="navSiteName">Tasty&Zesty</em>
                    <div className="sideLinkNav">
                        <Link to="/">Favorite</Link>
                    </div>
                </div>
            </>
}
        </>
    );
}
