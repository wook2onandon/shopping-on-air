import React from 'react';
import styles from './Footermenu.module.css';

const Footermenu = ({src, alt, onClickSelected, isSelected}) => {

  return(
  <a className={styles.menu}>
    <img src={src} alt={alt} className={styles.menuIcon} onClick={onClickSelected}/>
  </a>
  )};

export default Footermenu;
