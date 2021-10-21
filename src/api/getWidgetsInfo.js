import { useEffect, useState } from 'react';
import apiUtil from './apiUtil';
import useFetch from './useFetch';

async function getWidgetsInfo() {
  const data = [
    {
      i: '0',
      x: 3,
      y: 5,
      w: 4,
      h: 2,
      widget_code: 'wid000001',
      widget_action: 0,
      widget_type: 0,
      widget_data: {
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3sYxm%2Fbtrh5ZRjQw5%2F5PktJgulBWgTlLRjV7Z9d0%2Fimg.png',
      },
    },
    {
      i: '1',
      x: 5,
      y: 3,
      w: 5,
      h: 2,
      widget_code: 'wid000002',
      widget_action: 0,
      widget_type: 1,
      widget_data: {
        contents: 'text box',
      },
    },
    {
      i: '2',
      x: 1,
      y: 3,
      w: 2,
      h: 2,
      widget_code: 'wid000003',
      widget_action: 0,
      widget_type: 2,
      widget_data: {
        url: '유튜브 동영상 url',
      },
    },
  ];
  console.log('data_catch');
  console.log(data);
  return data;
}

export default getWidgetsInfo;
