import React from 'react';
import { useState } from 'react/cjs/react.development';
import Footermenu from '../footermenu/Footermenu';
import styles from './Footer.module.css';

const Footer = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const onClickSelected = () => {
    setIsSelected(!isSelected);
  };

  const [footerMenu, setFooterMenu] = useState([
    {
      id:0,
      src: '/images/live.png',
      alt:  'live'
    },
    {
      id:1,
      src: '/images/shoppingonair.png',
      alt:  'shoppingonair'
    },
    {
      id:2,
      src: '/images/people.png',
      alt:  'my page'
    },
  ])
  console.log(isSelected)
  return (
    <div className={styles.container}>
      <div className={styles.footerBox}>
        {
          footerMenu.map((item)=>{
            return (
            <Footermenu key={item.id} src={item.src} alt={item.alt} onClickSelected={onClickSelected} isSelected={isSelected}/>
            )})
        }
      </div>
    </div>
  );
};

export default Footer;
