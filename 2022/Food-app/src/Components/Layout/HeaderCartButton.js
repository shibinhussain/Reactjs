import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartCtx.length === 0) {
      return;
    }
    setButtonHighlighted(true);

    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
