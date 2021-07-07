import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SSignInBlock = styled.div`
  width: 300px;
  box-shadow: 0px 0px 10px 2px rgba(${({ theme }) => theme.borderColor}, 0.2);
  background-color: #E0E7E9;
  border-radius: 20px;
  text-align: center;
  padding: 30px 10px;
  transition: box-shadow ease .2s;
  animation: ${smoothAppearance} .3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(${({ theme }) => theme.borderColor}, 0.4);
  }
  .title {
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.backgroundHeadFoot};
  }
  .text {
    font-size: 16px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.backgroundHeadFoot};
  }
  .btn_wrapper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
    .facebook_login_btn {
      font-family: 'Montserrat Alternates', sans-serif !important;
      width: 110px;
      font-size: 16px;
      background-color: ${({ theme }) => theme.backgroundHeadFoot};
      color: #E0E7E9;
      border-radius: 20px;
      padding: 8px 5px;
      transition: all ease .2s;
      &:hover, &:focus {
        opacity: .9;
      }
    }
    .google_login_btn {
      font-family: 'Montserrat Alternates', sans-serif !important;
      display: inline-block !important;
      box-shadow: none !important;
      border: none !important;
      width: 110px !important;
      font-weight: 400 !important;
      font-size: 16px !important;
      background-color: ${({ theme }) => theme.backgroundHeadFoot} !important;
      color: #E0E7E9 !important;
      border-radius: 20px !important;
      padding: 8px 5px !important;
      transition: all ease .2s !important;
      &:hover, &:focus {
        opacity: .9;
      }
    }
  }
`