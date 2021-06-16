import React from 'react';
import { useState } from 'react/cjs/react.development';
import styles from './Footer.module.css';

const Footer = (props) => {
  const [footerMenu, setFooterMenu] = useState([
    {
      id: 0,
      src: '/images/live.png',
      alt: 'live',
    },
    {
      id: 1,
      src: '/images/shoppingonair.png',
      alt: 'shoppingonair',
    },
    {
      id: 2,
      src: '/images/people.png',
      alt: 'my page',
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.footerBox}>
        {footerMenu.map(({ src, alt }, index) => {
          return (
            <a className={styles.menu} key={index}>
              <img src={src} alt={alt} className={styles.menuIcon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
