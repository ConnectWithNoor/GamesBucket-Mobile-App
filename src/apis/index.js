import { axiosInstanceLGA } from './instance';

export const apiCall = async (method, url, data) => {
  const config = {
    method,
    url,
    ...data,
    signal: new AbortController().signal,
  };

  try {
    const response = await axiosInstanceLGA(config);

    if (response.status >= 200 && response.status < 300) {
      return {
        rawData: response.data,
        hasError: false,
        error: null,
      };
    } else {
      return {
        rawData: null,
        hasError: true,
        error: response.data,
      };
    }
  } catch (error) {
    console.log('error', error);
    return {
      rawData: null,
      hasError: true,
      error: error?.message || 'Something went wrong',
    };
  }
};
