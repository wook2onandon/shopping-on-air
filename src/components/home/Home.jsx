import React from 'react';
import CalendarList from './calendarList/CalendarList';
import styles from './Home.module.css';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Category from './category/Category';

const Home = (props) => (
  <div className={styles.container}>
    <Navbar />
    <div className={styles.contentsContainer}>
      <CalendarList />
      <Banner />
      <Category />
    </div>
  </div>
);

export default Home;
