import axios from 'axios';

type TConfig = {
  headers: any;
};

import config from '../config';
import { STORAGE_KEYS } from '../constants';
const apiService = axios.create({
  baseURL: config.apiUrl,
});

apiService.interceptors.request.use((config: TConfig) => {
  let assessToken = '';
  const currentUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (currentUser) {
    assessToken = JSON.parse(currentUser).accessToken;
  }

  config.headers = {
    ...config.headers,
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MiIsIkhldEhhblN0cmluZyI6IjI2LzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0NTYyNTYwMDAwMCIsIm5iZiI6MTcxODAzODgwMCwiZXhwIjoxNzQ1NzczMjAwfQ.dB37yIT7JCR8-a4XuqTFyZfc5Mr5r0V5icCjUZrxFnI',
    Authorization: `Bearer ${assessToken}`,
  };
  return config;
});

export default apiService;
