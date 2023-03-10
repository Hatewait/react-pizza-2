import React from 'react';
import { Link } from 'react-router-dom'
import image from '../assets/img/empty-cart.png'

const EmptyCart: React.FC = () => {
  return (
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пустая <span>😕</span></h2>
          <p>Вероятней всего, вы не заказывали ещё пиццу.
            Для того, чтобы заказать пиццу, перейди на главную страницу.</p> <br />.
          {<img src={image} alt="Empty cart" />}
          <Link to="/" className="button button--black"><span>Вернуться назад</span></Link>
        </div>
      </div>
  );
};

export default EmptyCart;
