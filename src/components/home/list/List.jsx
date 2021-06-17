import React, { useEffect, useState } from 'react';
import styles from './List.module.css';
// import axios from 'axios';
import useSearchApi from '../api/useSearchApi';
import { useCallback } from 'react/cjs/react.development';

const List = ({ selectedDay }) => {
  const { onAirData, loading, error } = useSearchApi();
  console.log(Object.prototype.toString.call(onAirData), onAirData);
  const [choiceDay, setChoiceDay] = useState(null);
  useEffect(() => {
    setChoiceDay(selectedDay);
  }, [selectedDay]);
  // console.log(onAirData[0].day, choiceDay, '데이터');
  const getOnAirList = useCallback(() => {
    const selectData = onAirData.filter(function (days) {
      return days.day === choiceDay;
    });
    console.log(selectData);
    return selectData;
  });

  const [onAirList, setOnAirList] = useState(getOnAirList);

  useEffect(() => {
    setOnAirList(getOnAirList);
  }, [selectedDay]);

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
