import axios from 'axios';

import api from './config';

export const getCityWeathers = (city) => {
  return (dispatch) => {
    axios.get(`${api}&cnt=5&units=metric&q=${city}`)
    .then((response) => {
      dispatch({
        type: 'weathers',
        payload: response.data.list,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
