import axios from 'axios';
import { youtubeApi, playlistId } from './BaseApi';

const getRequestYoutube = axios.create({
  baseURL: youtubeApi,
  method: 'get',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet',
    maxResults: '15',
  },
  headers: { 'Content-Type': 'application/json' }
});

export const getYoutubePlaylist = () => getRequestYoutube(`playlistItems?playlistId=${playlistId}`);

export const getYoutubePlaylistNextPage = (pageToken: string) =>
  getRequestYoutube(`playlistItems?playlistId=${playlistId}&pageToken=${pageToken}`);

export const getVideoDetails = (id: string) => getRequestYoutube(`videos?part=statistics&id=${id}`);