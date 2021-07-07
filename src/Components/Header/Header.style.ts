import styled from 'styled-components';

export const SHeader = styled.header`
  font-family: 'Montserrat Alternates', sans-serif;
  flex-shrink: 0;
  color: #E0E7E9;
  background-color: ${({ theme }) => theme.backgroundHeadFoot};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.boxshadowHeadFoot};
  z-index: 5;
  transition: all .5s ease-out;
  .nav_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0px;
    .logo {
      font-size: 26px;
      padding: 0 4px;
      border-radius: 10px;
      outline: none;
      cursor: pointer;
      user-select: none;
      transition: all ease-out .2s;
      &:hover {
        font-size: 28px;
      }
    }
    .header_user_control {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .theme_toggle {
        margin-right: 6px;
      }
      .log_out {
      font-family: 'Montserrat Alternates', sans-serif;
      position: relative;
      font-size: 16px;
      color: #E0E7E9;
      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 7px;
        height: 1px;
        width: 0;
        background-color: #E0E7E9;
        transition: all ease-out .2s;
      }
      &:hover::after, &:focus::after {
        width: 82%;
      }
    }
    }
    &__start {
    justify-content: flex-start;
      .logo__sign_in {
        font-size: 26px;
        outline: none;
        user-select: none;
      }
    }
  }
`