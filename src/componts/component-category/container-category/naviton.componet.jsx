import { Fragment } from "react";
import {Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "../component-stayle/navigation.styles.scss";
const Navbar=()=>{
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>shop</Link>
            </div>
        
        </div>
        <Outlet/>

    </Fragment>
    );


}

export default Navbar;