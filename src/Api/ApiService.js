import axios from 'axios';
import { youtubeApiList, playlistId } from './BaseApi';

const request = axios.create({
  baseURL: youtubeApiList,
  headers: { 'Content-Type': 'application/json' }
});

export const getYoutubePlaylist = (maxResults) => {
  return request.get(`?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
};

export const getYoutubePlaylistNextPage = (maxResults, pageToken) => {
  return request.get(`?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
};