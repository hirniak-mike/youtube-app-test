import styled from 'styled-components';

export const SBasicPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ScrollToTopWrapper = styled.div`
  .scroll_icon {
    width: 35px;
    height: 35px;
    color: white;
    background-color: ${({ theme }) => theme.backgroundHeadFoot};
    border-radius: 50%;
    box-shadow: 0px 0px 10px 2px rgba(163, 198, 196, 0.5);
    transition: all ease .3s;
    &:hover, &:focus {
      transform: scale(1.1);
    }
  }
`