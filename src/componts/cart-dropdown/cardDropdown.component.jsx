import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.compnent';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart.compont';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    
    const goToCheckOut = () => {
        navigate('/checkout');
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />   
                ))}
            </div>
            <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CartDropDown;

