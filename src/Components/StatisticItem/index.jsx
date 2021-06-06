import React from 'react';

import s from './style.module.scss';

const StaticticItem = ({ icon, value, tooltip }) => {
  return (
    <div data-tooltip={tooltip} className={s.statistic_item}>
      {icon}
      <span className={s.value}>{value}</span>
    </div>
  );
};

export default StaticticItem;
