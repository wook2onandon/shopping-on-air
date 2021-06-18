import React, { useEffect, useRef, useState } from 'react';
import styles from './Category.module.css';
import useSearchApi from '../api/useSearchApi';

const Category = (props) => {
  const [onAirData, loading, error] = useSearchApi();
  const menus = [
    { id: 0, menu: '전체', selected: 'all', diff: 0 },
    { id: 1, menu: '식품·건강', selected: 'food', diff: 1 },
    { id: 2, menu: '뷰티', selected: 'beauty', diff: 2 },
    { id: 3, menu: '패션·잡화', selected: 'fashion', diff: 3 },
    { id: 4, menu: '생활·가전', selected: 'living', diff: 4 },
    { id: 5, menu: '유아·아동', selected: 'kids', diff: 5 },
    { id: 6, menu: '기타', selected: 'etc', diff: 6 },
    { id: 7, menu: '' },
  ];

  const containerRef = useRef();
  const listRef = useRef();
  const menuRef = useRef();
  const [targetX, setTargetx] = useState();
  const [targetWidth, setTargetWidth] = useState();
  const onClickSelet = (menu, e) => {
    setSelectedCategory(menu);
    setTargetx(e.target.getBoundingClientRect().left);
    setTargetWidth(e.target.offsetWidth);
    console.log(
      menu,
      e.target.offsetWidth,
      e.target.getBoundingClientRect().left,
    );
    return e;
  };

  // const onClickEvent = (e) => {
  //   console.log(e);
  //   // return e.nativeEvent.target.parentNode.offsetLeft;
  // };
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (!listRef.current) return;

    const selectedCategoryObj = menus.find(
      (menu) => menu.selected === selectedCategory,
    );

    if (!selectedCategoryObj) return;

    const boxHarf = containerRef.current.clientWidth / 2;
    const listWidth = listRef.current.scrollWidth;
    const targetPos = targetX;
    const selectTargetPos = targetPos + targetWidth / 2;
    let pos = 0;

    if (selectTargetPos <= boxHarf) {
      pos = 0;
    } else if (listWidth - selectTargetPos <= boxHarf) {
      pos = listWidth - selectTargetPos;
    } else {
      pos = selectTargetPos - boxHarf;
    }

    listRef.current.scrollTo({
      left: pos,
      behavior: 'smooth',
    });
    // console.log(boxHarf, listWidth, targetPos, selectTargetPos, pos);
  }, [menus, selectedCategory]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.listWrapper}>
        <ul className={styles.menuList} ref={listRef}>
          {menus.map(({ id, menu, selected }) => {
            return (
              // <Categorymenu
              //   key={item.id}
              //   onClickSelet={onClickSelet}
              //   menu={item.menu}
              //   selected={item.selected}
              // />
              <a
                className={styles.menuBox}
                key={id}
                onClick={(e) => onClickSelet(selected, e)}
                ref={menuRef}
              >
                <li className={styles.menu}>{menu}</li>
              </a>
            );
          })}
        </ul>
      </div>
      <div className={styles.channelContainer}>
        <img className={styles.icon} src="/images/menu.png" alt="menu"></img>
        <span className={styles.channel}>채널</span>
      </div>
    </div>
  );
};

export default Category;
