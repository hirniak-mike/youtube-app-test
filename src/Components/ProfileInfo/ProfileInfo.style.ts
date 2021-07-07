import styled from 'styled-components';

export const SProfileInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin-bottom: 4px;
  &::before {
    position: absolute;
    top: -4px;
    left: 0;
    content: "";
    height: 1px;
    width: 100%;
    background-color: white;
  }
  .img_wrapper {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    margin-right: 8px;
    .user_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .user_name {
    flex: 1 0 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`