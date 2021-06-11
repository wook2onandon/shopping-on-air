import React from 'react';
import Calendar from '../calendar/Calendar';
import styles from './CalendarList.module.css';
import moment from 'moment';
import 'moment/locale/ko';

const CalendarList = (props) => {
  const today = moment();

  // const [days, setDays] = useState([
  //   {
  //     day: '',
  //     month: '',
  //     year: '',
  //     week: '',
  //     id: '',
  //   },
  // ]);
  const days = [];

  for (let i = -7; i < 8; i++) {
    days.push({
      day: parseInt(today.clone().add(i, 'days').format('DD')),
      month: parseInt(today.format('MM')),
      year: parseInt(today.format('YYYY')),
      week: today.clone().add(i, 'days').format('ddd'),
      id: i + 8,
    });
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {days.map((days) => {
          return <Calendar day={days.day} week={days.week} key={days.id} />;
        })}
      </ul>
      {console.log(days)}
    </div>
  );
};

export default CalendarList;
