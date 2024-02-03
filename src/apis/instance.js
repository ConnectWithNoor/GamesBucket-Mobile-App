import axios from 'axios';

import {
  RAPIDAPI_BASE_URL,
  RAPIDAPI_BASE_URL_HOST,
  RAPIDAPI_BASE_URL_KEY,
} from '@env';

const axiosInstanceLGA = axios.create({
  baseURL: RAPIDAPI_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidAPI-key': RAPIDAPI_BASE_URL_KEY,
    'x-rapidAPI-host': RAPIDAPI_BASE_URL_HOST,
  },
});

export { axiosInstanceLGA };
