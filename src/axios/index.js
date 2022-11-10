import { snakeCaseToTitleCase } from '@utils';
import { ADMIN_CENTER_ACCESS_TOKEN, ERROR_TYPE } from '@utils/constants';
import { getLocalStorage } from '@utils/localStorage';
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(async (config) => {
  const accessToken = getLocalStorage(ADMIN_CENTER_ACCESS_TOKEN);
  config.headers['Content-type'] = 'application/json';
  if (accessToken) {
    config.headers['authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

const entriesFunction = (messagesData) => {
  let messages = '';
  Object.entries(messagesData).forEach((item) => {
    messages += `${snakeCaseToTitleCase(item[0])}: ${item[1].toString()}`;
  });
  return messages;
};

export const handlerErrorFormMessage = (error) =>
  error.type === ERROR_TYPE.single ? error.messages : entriesFunction(error.messages);

export const checkResponseStatus = (response) => {
  const { errorCode } = response.data;
  if (errorCode === 0) {
    return response;
  }
  const message = handlerErrorFormMessage(response.data.error);
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ status: errorCode, data: message });
};

instance.interceptors.response.use(checkResponseStatus);

export default instance;
