import React, { useEffect, useState } from 'react';
import styles from './List.module.css';

const getOnAirList = (day) => {
  const liveData = [
    {
      day: 13,
      name: '감성 테이블웨어 트위그뉴욕 헤리티지 블루버드/데이지체인',
      mall: '/images/kakaoshopping.png',
      thumbnail: '/images/list1.png',
      whetheLive: '방송종료',
      category: '생활·가전'
    },
    {
      day: 13,
      name: '[파크론] 어반헤링본 에어버블 놀이방매트',
      mall: '/images/navershopping.png',
      thumbnail: '/images/list2.jpg',
      whetheLive: '방송종료',
      category: '유아·아동'
    },
    {
      day: 15,
      name: '올여름, 뼈건강 관리를 위한 매일유업 골든밀크 특별방송',
      mall: '/images/navershopping.png',
      thumbnail: '/images/list3.jpg',
      whetheLive: '방송종료',
      category: '식품·건강'
    },
    {
      day: 15,
      name: '신상 글라스데코 아이클레이 카카오리틀프렌즈',
      mall: '/images/hmall.png',
      thumbnail: '/images/list4.png',
      whetheLive: '방송중',
      category: '유아·아동'
    },
    {
      day: 15,
      name: '[키즈라이브데이]블랑101 최초 라이브 방송!',
      mall: '/images/hmall.png',
      thumbnail: '/images/list5.jpg',
      whetheLive: '방송예정',
      category: '뷰티',
    },
  ];

  const selectData = liveData.filter((days) => day === days.day);

  console.log(selectData, 'select');
  return selectData;
};

const List = ({ selectedDay }) => {
  const [onAirList, setOnAirList] = useState(getOnAirList(selectedDay));
  useEffect(() => {
    setOnAirList(getOnAirList(selectedDay));
  }, [selectedDay]);

  if (!onAirList) return 'loading...';
  console.log(onAirList, selectedDay, 'setOnAir');

  return (
    <div className={styles.container}>
      <ul className={styles.liveListBox}>
        {onAirList.map((item, index) => {
          return (
            <li className={styles.liveList} key={index}>
              <a className={styles.listLink}>
                <div className={styles.imgContainer}>
                  <img
                    src={item.thumbnail}
                    className={styles.image}
                    alt="thumbnail"
                  />
                </div>
                <div className={styles.contentsContainer}>
                  <div className={styles.mallBox}>
                    <img src={item.mall} alt="mall" className={styles.mall} />
                  </div>
                  <div className={styles.nameBox}>
                    <div className={styles.name}>{item.name}</div>
                  </div>
                  <div className={styles.whetheLiveBox}>
                    <span className={styles.whetheLive}>{item.whetheLive}</span>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

// 1. 어떤 데이터가 필요한지?
// 2. 그 데이터는 변하는지? const? api 가져오는 값인지
// 3. 그 데이터를 어디서 관리 할 지...
