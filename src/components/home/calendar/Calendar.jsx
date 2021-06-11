import React from 'react';
import styles from './Calendar.module.css';

const claendar = ({ day, week }) => (
  <li className={styles.dayContainer}>
    <a className={styles.dayBox}>
      <div className={styles.dayNum}>{day}</div>
      <div className={styles.dayWeek}>{week}</div>
    </a>
  </li>
);

export default claendar;
