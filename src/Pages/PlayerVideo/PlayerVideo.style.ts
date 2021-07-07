import styled from 'styled-components';

export const SPlayerVideo = styled.main`
  flex: 1 0 auto;
  padding: 20px 0 30px 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: background-color ease-in-out .5s;
`