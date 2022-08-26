import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
  const { products } = props;
  return (
    <ul className="cards-inner">
      {products.map((product, i) => {
        return <ShopCard product={product} key={i} />;
      })}
    </ul>
  );
}

CardsView.propTypes = {
  products: PropTypes.array,
};

export default CardsView;
