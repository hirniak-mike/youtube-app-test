import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SPageNotFound = styled.main`
  font-family: 'Montserrat Alternates', sans-serif;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 22px;
  text-align: center;
  transition: background-color .5s ease-in-out;
  .title {
    font-size: 34px;
    font-weight: 700;
    color: ${({ theme }) => theme.textColor};
    transition: color .5s ease-in-out;
    animation: ${smoothAppearance} .3s ease-in-out;
  }
  .go_main {
    color: ${({ theme }) => theme.textColor} !important;
    transition: color .5s ease-in-out;
    animation: ${smoothAppearance} .3s ease-in-out;
  }
  .go_main_link {
  font-weight: 700;
  outline: none;
    &:hover, &:focus {
      text-decoration: underline;
    }
  }
`