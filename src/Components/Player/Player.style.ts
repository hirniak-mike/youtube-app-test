import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SPlayerBlock = styled.div`
  margin: 0 auto 20px auto;
  max-width: 800px;
  animation: ${smoothAppearance} .3s ease-in-out;
  .player_wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`