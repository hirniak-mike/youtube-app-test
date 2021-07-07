import styled from 'styled-components';

export const SVideoItem = styled.div`
  .video_item_link {
  font-family: 'Montserrat Alternates', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundCard};
  min-width: 275px;
  max-width: 275px;
  height: 270px;
  margin: 0 10px 30px;
  box-shadow: 0px 0px 10px 2px rgba(${({ theme }) => theme.borderColor}, 0.2);
  transition: all ease-out .5s;
  outline: none;
    &:hover, &:focus {
      box-shadow: 0px 0px 10px 2px rgba(${({ theme }) => theme.borderColor}, 0.5);
      .image {
        transform: scale(1.1);
      }
    }
    .top_card {
      flex: 1 0 90%;
      .image_wrapper {
        width: 100%;
        height: 64%;
        overflow: hidden;
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all ease-out .3s;
        }
      }
      .title {
        color: ${({ theme }) => theme.textColor};
        width: 100%;
        padding: 0 10px;
        margin: 5px 0;
        font-size: 14px;
        line-height: 23px;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        transition: color ease-out .5s;
      }
    }
    .published_at {
      font-size: 13px;
      margin: 0 10px 10px;
      color: ${({ theme }) => theme.textColor};
      transition: color ease-out .5s;
    }
  }
`