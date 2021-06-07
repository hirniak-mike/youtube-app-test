import axios from 'axios';
import { youtubeApi, playlistId } from './BaseApi';

const getRequestYoutube = axios.create({
  baseURL: youtubeApi,
  method: 'get',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet',
  },
  headers: { 'Content-Type': 'application/json' }
});

export const getYoutubePlaylist = (maxResults) => {
  return getRequestYoutube(`playlistItems?playlistId=${playlistId}&maxResults=${maxResults}`)
};

export const getYoutubePlaylistNextPage = (maxResults, pageToken) => {
  return getRequestYoutube(`playlistItems?playlistId=${playlistId}&maxResults=${maxResults}&pageToken=${pageToken}`)
};

export const getVideoDetails = (id) => {
  return getRequestYoutube(`videos?part=statistics&id=${id}`)
};