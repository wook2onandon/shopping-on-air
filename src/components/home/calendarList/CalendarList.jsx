import React, { useState } from 'react';
import Calendar from '../calendar/Calendar';
import styles from './CalendarList.module.css';

const CalendarList = (props) => {
  const today = new Date();
  let todayDate = today.getDate();
  let todayWeek = today.getDay();
  const weekend = ['일', '월', '화', '수', '목', '금', '토'];

  const [month, setMonth] = useState([
    {
      num: todayDate - 4,
      week: weekend[todayWeek - 4 < 0 ? todayWeek + 7 : todayWeek - 4],
    },
    {
      num: todayDate - 3,
      week: weekend[todayWeek - 3 < 0 ? todayWeek + 7 : todayWeek - 3],
    },
    {
      num: todayDate - 2,
      week: weekend[todayWeek - 2 < 0 ? todayWeek + 7 : todayWeek - 2],
    },
    {
      num: todayDate - 1,
      week: weekend[todayWeek - 1 < 0 ? todayWeek + 7 : todayWeek - 1],
    },
    {
      num: todayDate,
      week: weekend[todayWeek],
    },
    {
      num: todayDate + 1,
      week: weekend[todayWeek + 1 > 6 ? todayWeek + 1 - 7 : todayWeek + 1],
    },
    {
      num: todayDate + 2,
      week: weekend[todayWeek + 2 > 6 ? todayWeek + 2 - 7 : todayWeek + 2],
    },
    {
      num: todayDate + 3,
      week: weekend[todayWeek + 3 > 6 ? todayWeek + 3 - 7 : todayWeek + 3],
    },
    {
      num: todayDate + 4,
      week: weekend[todayWeek + 4 > 6 ? todayWeek + 4 - 7 : todayWeek + 4],
    },
    ,
  ]);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {month.map((days) => {
          return <Calendar day={days.num} week={days.week} key={days.num} />;
        })}
      </ul>
      {console.log(todayDate)}
    </div>
  );
};

export default CalendarList;
