import React from 'react';
import Slider from 'react-slick';
import styles from './Banner.module.css';

const Banner = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const items = [
    { id: 1, url: '/images/banner1.png' },
    { id: 2, url: '/images/banner2.png' },
    { id: 3, url: '/images/banner3.png' },
    { id: 4, url: '/images/banner4.png' },
  ];

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img className={styles.banner} src={item.url} alt="banner" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
