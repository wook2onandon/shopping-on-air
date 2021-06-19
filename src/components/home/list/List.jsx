import React, { useCallback, useEffect, useState } from 'react';
import styles from './List.module.css';
import useSearchApi from '../api/useSearchApi';

const getOnAirList = (data, choice) => {
  let selectData = null;
  if (data) {
    selectData = data.filter((days) => {
      return days.day === choice;
    });
  }
  return selectData;
};

const getCategory = (data, choice) => {
  let selectCategory = null;
  selectCategory = data.filter((item) => {
    return item.category === choice;
  });
  return selectCategory;
};

const List = ({ selectedDay, setSelectedCategory, selectedCategory }) => {
  //custom hook api호출받아온 데이터
  const [onAirData, loading, error] = useSearchApi();
  console.log(onAirData);
  //console.log(selectedDay, '셀렉');
  const [choiceDay, setChoiceDay] = useState(selectedDay);
  //console.log(choiceDay, '초이스데이초기값');
  const [onAirList, setOnAirList] = useState([]);

  useEffect(() => {
    if (!onAirData) getOnAirList([]);
    // console.log('성공보다 느리게 나와야 여기에 데이터가 들어감');
    setOnAirList(getOnAirList(onAirData, choiceDay));
  }, [onAirData]);

  // console.log(onAirList, '온에어리스트초기값');
  // console.log(Object.prototype.toString.call(onAirData), onAirData);

  //
  useEffect(() => {
    setChoiceDay(selectedDay);
  }, [selectedDay]);

  useEffect(() => {
    setOnAirList(getCategory(onAirList, selectedCategory));
    console.log(onAirList, '온에어리스트', selectedCategory, '선택카테고리');
  }, [selectedCategory]);
  // useEffect(() => {
  //   selectedDay = selectedDay;
  // }, [!choiceDay]);

  useEffect(() => {
    setOnAirList(getOnAirList(onAirData, choiceDay));
  }, [choiceDay]);

  // console.log(onAirData, '온에어데이터');

  console.log(onAirList, '온에어', choiceDay, '초이스데이');

  if (!onAirList) return 'loading...';

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
