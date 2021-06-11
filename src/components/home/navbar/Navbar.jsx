import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => (
  <div className={styles.container}>
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <div className={styles.iconContainer}>
      <img
        className={styles.iconSearch}
        src="/images/search.png"
        alt="search"
      />
      <img className={styles.iconBell} src="/images/bell.png" alt="bell" />
    </div>
  </div>
);

export default Navbar;
