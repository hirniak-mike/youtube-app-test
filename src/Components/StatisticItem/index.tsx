import React from 'react';

import { IProps } from './statisticItem.types';

import { SStatisticItem } from './StatisticItem.style';

const StaticticItem: React.FC<IProps> = ({ icon, value, tooltip }) => {
  return (
    <SStatisticItem data-tooltip={tooltip}>
      {icon}
      <span className='value'>{value}</span>
    </SStatisticItem>
  );
};

export default StaticticItem;
