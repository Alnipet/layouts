import React from 'react';
import PropTypes from 'prop-types';

function ShopItem(props) {
  const { product } = props;

  return (
    <li className="item-inner">
      <img className="item-img" src={product.img} alt={`Изображение ${product.name}`} />
      <h1 className="item-title">{product.name}</h1>
      <div className="item-color">{product.color}</div>

      <div className="price">${product.price}</div>
      <button className="btn">Add to card</button>
    </li>
  );
}

ShopItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
};

export default ShopItem;
