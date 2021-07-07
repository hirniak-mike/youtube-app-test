import styled from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const SPlaylist = styled.div`
  animation: ${smoothAppearance} .3s ease-in-out;
  .fake_item {
    min-width: 275px;
    max-width: 275px;
    height: 0px;
    margin: 0 10px;
  }
  .wrapper_items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: visible !important;
  }
  .loader_wrapper_next_page {
    flex: 0 0 100%;
    display: flex;
    justify-content: center;
  }
`