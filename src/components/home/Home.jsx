import React, { useState } from 'react';
import CalendarList from './calendarList/CalendarList';
import styles from './Home.module.css';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import Category from './category/Category';
import moment from 'moment';
import 'moment/locale/ko';
import List from './list/List';
import Footer from './footer/Footer';

const Home = (props) => {
  const today = moment();
  const [selectedDay, setSelectedDay] = useState(parseInt(today.format('DD')));
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.contentsContainer}>
        <CalendarList
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <Banner />
        <Category />
        <List selectedDay={selectedDay} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
