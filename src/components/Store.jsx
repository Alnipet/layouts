import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardView from './CardsView';

function Store() {
  const [iconType, setIconTypes] = useState(0);

  const products = [
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'red',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'blue',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg',
    },
    {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg',
    },
    {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg',
    },
    {
      name: 'Nike Metcon 3',
      price: '150',
      color: 'green',
      img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg',
    },
  ];

  const iconTypes = ['view_module', 'view_list'];

  const onSwitch = (event) => {
    setIconTypes((prevIconType) => (prevIconType === 0 ? 1 : 0));
  };

  return (
    <div className="container">
      <IconSwitch iconType={iconTypes[iconType]} onSwitch={onSwitch} />
      <div>
        {iconTypes[iconType] === 'view_list' ? <ListView products={products} /> : <CardView products={products} />}
      </div>
    </div>
  );
}

export default Store;
