import React from 'react';
import styles from './Category.module.css';

const Category = (props) => {
  const menus = [
    { id: 1, menu: '전체' },
    { id: 2, menu: '식품·건강' },
    { id: 3, menu: '뷰티' },
    { id: 4, menu: '패션·잡화' },
    { id: 5, menu: '생활·가전' },
    { id: 6, menu: '유아·아동' },
    { id: 7, menu: '기타' },
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.menuList}>
        {menus.map((item) => {
          return (
            <li className={styles.menu} key={item.id}>
              {item.menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
