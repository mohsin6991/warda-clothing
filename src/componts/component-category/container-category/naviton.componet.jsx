import { Fragment, useContext } from "react";
import {Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.contexts";
import "../component-stayle/navigation.styles.scss";
import { SignOut } from "../../../utilts/firebase/firebase-utlits";
import  CartIcon  from '../cart-icon/cart.componet';
import CartDropdown from "../../cart-dropdown/cardDropdown.component";
import { CartContext } from "../../../context/cart.context";
const Navbar=()=>{
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
      
        await SignOut();
        setCurrentUser(null);  // Update currentUser state to null after sign-out
      
    };
    const { isCartOpen } = useContext(CartContext);
    return (
    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrwnLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>shop</Link>
            {
                currentUser?(
                    <Link className="nav-link" onClick={ signOutHandler }>Sing Out</Link>
                ):(
                    <Link className="nav-link" to='/auth'>Sing In</Link>
                )
            }
            <CartIcon />
            {isCartOpen && <CartDropdown />}
          </div>    
        </div>
        <Outlet/>
    </Fragment>
    );


}

export default Navbar;