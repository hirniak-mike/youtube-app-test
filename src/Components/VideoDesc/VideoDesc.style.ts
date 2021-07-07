import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SVideoDesc = styled.div`
  .title {
  font-family: 'Montserrat Alternates', sans-serif;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColor};
  transition: color ease-in-out .5s;
  animation: ${smoothAppearance} .3s ease-in-out;
    &::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.textColor};
      transition: background-color ease-in-out .5s;
    }
  }
  .img_wrapper {
    width: 250px;
    height: 140px;
    float: left;
    margin-right: 10px;
    .thumbnails {
      width: 100%;
      height: 100%;
      object-fit: cover;
      font-size: 12px;
    }
  }
  .desc {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 21px;
  color: ${({ theme }) => theme.textColor};
  transition: color ease-in-out .5s;
    a {
      color: ${({ theme }) => theme.linkColor} !important;
      transition: color ease-in-out .5s;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .img_wrapper {
      width: 175px;
      height: 100px;
    }
    .title {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 500px) {
    .img_wrapper {
      width: 125px;
      height: 70px;
    }
    .desc {
      font-size: 12px;
      line-height: 18px;
    }
  }
`