import styled from 'styled-components';

export const SStatisticItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  margin-right: 15px;
  color: ${({ theme }) => theme.textColor};
  transition: color .5s ease-in-out;
  .value {
    font-size: 16px;
    margin-left: 4px;
  }
`