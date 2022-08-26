import React from 'react';
import PropTypes from 'prop-types';

function ShopCard(props) {
  const { product } = props;

  return (
    <li className="card-inner">
      <h1 className="card-title">{product.name}</h1>
      <div className="card-color">{product.color}</div>
      <img className="card-img" src={product.img} alt={`Изображение ${product.name}`} />

      <div className="price-inner">
        <div className="price">${product.price}</div>
        <button className="btn">Add to card</button>
      </div>
    </li>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ShopCard;
