import React, { useState, useCallback } from 'react';
import Calendar from '../calendar/Calendar';
import styles from './CalendarList.module.css';
import moment from 'moment';
import 'moment/locale/ko';

const getDaysFromToday = (today) => {
  const days = [];

  for (let i = -7; i < 8; i++) {
    days.push({
      day: parseInt(today.clone().add(i, 'days').format('DD')),
      month: parseInt(today.format('MM')),
      year: parseInt(today.format('YYYY')),
      week: today.clone().add(i, 'days').format('ddd'),
      diff: i + 7,
    });
  }

  return days;
};

const getDayDiff = (today, selectedDay) => {};

const CalendarList = (props) => {
  const containerRef = React.useRef(null);
  const today = moment();
  const days = getDaysFromToday(today);

  const [selectedDay, setSelectedDay] = useState(parseInt(today.format('DD')));

  const handleClickDay = useCallback((day) => {
    setSelectedDay(day);
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const selectedDayObj = days.find((day) => day.day === selectedDay);

    if (!selectedDayObj) return;

    containerRef.current.scrollTo({
      left: selectedDayObj.diff * 40,
      behavior: 'smooth',
    });
  }, [days, selectedDay]);

  return (
    <div ref={containerRef} className={styles.container}>
      <ul className={styles.list}>
        {days.map((days) => {
          return (
            <Calendar
              key={days.day}
              day={days.day}
              week={days.week}
              isToday={days.day === today.format('DD')}
              isSelected={days.day === selectedDay}
              onClickDay={handleClickDay}
            />
          );
        })}
      </ul>
      {console.log(days)}
    </div>
  );
};

export default CalendarList;
