import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectAuthenticatedUser } from "../../app/store/slices/selectors";
import "../../fonts/airbnb-cereal-app-bold.ttf";
import './navigation.css';
import { logoutUser } from "../../app/store/slices/actions";



export default function Header() {
    const [expandMenu, setExpandedMenu] = useState<boolean>(false)
    const showMenu = () => { setExpandedMenu(!expandMenu) }
    const closeMenu = () => { setExpandedMenu(false) }
    const isAuth = useSelector(selectAuthenticatedUser)
    const location = useLocation()
    const navigation = useNavigate()
    const dispatch = useDispatch();


    function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
            event.preventDefault()
            if(isAuth){
                dispatch(logoutUser())
                navigation('/login')

            }
    }

    useEffect(() => {
        const paths = ['/login', '/register',]
        if (isAuth && paths.includes(location.pathname)) {
            navigation('/')
        } else if (!isAuth && location.pathname === '/favorite') {
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
                        <Link to="/" className="navSiteName">
                        <em>Tasty&Zesty</em></Link>
                    </div>
                    <div className="navTakeSpace"></div>
                    <div className="navPintedInfo" >
                        {isAuth ?
                            <button className="navLogoutBtn" onClick={handleLogout}>LogOut</button>
                            :
                            <div>
                                {/* <Link className="navSearchIcon" to="/login"><img height="50" src="/icons/pan.png" /></Link> */}
                                <Link className="navLogIn" to='/login'>LogIn</Link>
                            </div>
                        }
                    </div>
                </div>
            </section >
            {
                expandMenu &&
                <>
                    <div className="sideNav" onClick={closeMenu} >
                        <section className="sideNavCloseBth" onClick={closeMenu}>
                            <div className="sideNavLeftRigth"></div>
                            <div className="sideNavRightLeft"></div>
                            <label className="sideNavClose">close</label>
                        </section>
                        <div className="siteNameSideBar">
                            <em className="navSiteName">Tasty&Zesty</em>
                        </div>
                        <div className="sideLinkNav">
                            <Link to="/">Home page</Link>
                            <Link to="/favorite">Favorite</Link>
                        </div>
                        <div></div>
                        <section className="footerForSideNav">
                            <a href="https://www.linkedin.com/in/karina-kvych-036958216/" target="blank">
                                <img height="50" width="50" src="/public/icons/LinkedIn_icon_circle.svg.png" />
                            </a>
                            <a href="https://github.com/karin0chka" target="blank"  >
                                <img height="50" width="50" src="/public/icons/GitHub-Mark.png" />
                            </a>
                        </section>
                    </div>
                </>
            }
        </>
    );
}
