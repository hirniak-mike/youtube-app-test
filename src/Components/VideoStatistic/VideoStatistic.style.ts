import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SVideoStatistic = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 15px;
  animation: ${smoothAppearance} .3s ease-in-out;

  [data-tooltip] {
  font-size: 10px;
  position: relative;
  }
  [data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  right: 0; top: 10px;
  background: #354649;
  color: #fff;
  padding: 2px 4px 1px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  pointer-events: none;
  opacity: 0; 
  z-index: 999;
  transition: ease-out .4s;
  } 
  [data-tooltip]:hover::after {
  opacity: 1;
  top: 21px;
  }
`