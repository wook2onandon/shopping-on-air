import React from 'react';
import styles from './Categorymenu.module.css';

const Categorymenu = ({ id, onClickSelet, menu, selected }) => {
  return (
    <a
      className={styles.menuBox}
      key={id}
      onClick={(e) => onClickSelet(selected, e)}
    >
      <li className={styles.menu}>{menu}</li>
    </a>
  );
};

export default Categorymenu;
