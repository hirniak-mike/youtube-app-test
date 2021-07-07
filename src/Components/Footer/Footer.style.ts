import styled from 'styled-components';

export const SFooter = styled.footer`
  font-family: 'Montserrat Alternates', sans-serif;
  flex-shrink: 0;
  padding-top: 25px;
  padding-bottom: 10px;
  background-color: ${({ theme }) => theme.backgroundHeadFoot};
  box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.boxshadowHeadFoot};
  transition: all .5s ease-out;
  color: #E0E7E9;
  text-align: center;
  .text {
    font-size: 12px;
  }
`