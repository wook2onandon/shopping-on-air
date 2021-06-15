import React from 'react';
import styles from './Calendar.module.css';

const Calendar = ({ day, week, onClickDay }) => (
  <li className={styles.dayContainer} onClick={() => onClickDay(day)}>
    <div className={styles.dayBox}>
      <div className={styles.dayNum}>{day}</div>
      <div className={styles.dayWeek}>{week}</div>
    </div>
  </li>
);

export default Calendar;
