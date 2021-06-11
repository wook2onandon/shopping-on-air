import React from 'react';
import CalendarList from './calendarList/CalendarList';
import styles from './Home.module.css';
import Navbar from './navbar/Navbar';

const Home = (props) => (
  <div className={styles.container}>
    <Navbar />
    <CalendarList />
  </div>
);

export default Home;
