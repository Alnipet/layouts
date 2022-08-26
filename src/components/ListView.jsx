import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function CardsView(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product, i) => {
        return <ShopItem product={product} key={i} />;
      })}
    </ul>
  );
}

CardsView.propTypes = {
  products: PropTypes.array,
};

export default CardsView;
