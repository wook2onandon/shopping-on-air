import React, { useEffect, useState } from 'react';
import styles from './List.module.css';

const getOnAirList = (day) => {
  const liveData = [
    {
      day: 15,
      name: '감성 테이블웨어 트위그 뉴욕 헤리티지 블루버드',
      mall: '카카오쇼핑',
      thumbnal: '/images/list1.png',
    },
    {
      day: 15,
      name: '[파크론] 어반헤링본 에어버블 놀이방매트',
      mall: 'Hmall',
      thumbnal: '/images/list2.png',
    },
    {
      day: 15,
      name: '올여름, 뼈건강 관리를 위한 매일유업 골든밀크 특별방송',
      mall: '네이버 쇼핑',
      thumbnal: '/images/list3.png',
    },
    {
      day: 15,
      name: '신상 글라스데코 아이클레이 카카오리틀프렌즈',
      mall: '네이버 쇼핑',
      thumbnal: '/images/list4.png',
    },
    {
      day: 15,
      name: '[키즈라이브데이] 블랑101 최초 라이브 방송!',
      mall: 'Hmall',
      thumbnal: '/images/list5.png',
    },
  ];

  const selectData = liveData.filter((days) => {
    if (day === days.day) {
      return days;
    } else {
      return '방송이 없습니다.';
    }
  });

  const liveList = [selectData];

  return liveList;
};

const List = ({ selectedDay }) => {
  const [onAirList, setOnAirList] = useState(getOnAirList(selectedDay));

  useEffect(() => {
    return () => {
      setOnAirList(getOnAirList(selectedDay));
    };
  }, [selectedDay]);
  console.log(onAirList);
  if (!onAirList) return 'loading...';

  return <div className={styles.container}></div>;
};

export default List;

// 1. 어떤 데이터가 필요한지?
// 2. 그 데이터는 변하는지? const? api 가져오는 값인지
// 3. 그 데이터를 어디서 관리 할 지...
