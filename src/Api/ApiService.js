import axios from 'axios';
import { youtubeApi, playlistId } from './BaseApi';

const request = axios.create({
  baseURL: youtubeApi,
  headers: { 'Content-Type': 'application/json' }
});

export const getYoutubePlaylist = (maxResults) => {
  return request.get(`playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
};

export const getYoutubePlaylistNextPage = (maxResults, pageToken) => {
  return request.get(`playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
};

export const getVideoDetails = (id) => {
  return request.get(`videos?part=statistics&part=snippet&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
};