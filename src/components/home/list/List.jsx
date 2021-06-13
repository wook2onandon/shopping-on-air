import React from 'react';

const getOnAirList = (day) => {
  return [day, day + 1, day + 2];
};

const List = (props) => {
  const [onAirList, setOnAirList] = React.useState(null);

  React.useEffect(() => {
    return () => {
      setOnAirList(getOnAirList(selectedDay));
    };
  }, [selectedDay]);

  if (!onAirList) return 'loading...';

  return <div className={styles.container}></div>;
};

export default List;

// 1. 어떤 데이터가 필요한지?
// 2. 그 데이터는 변하는지? const? api 가져오는 값인지
// 3. 그 데이터를 어디서 관리 할 지...
