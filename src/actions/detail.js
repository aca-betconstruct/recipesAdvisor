import { REQUEST_DETAIL, RECEIVE_DETAIL, EDAMAM_KEYS } from '../constants';

const requestDetail = () => {
  return {
    type: REQUEST_DETAIL
  };
};

const receiveDetail = json => {
  return {
    type: RECEIVE_DETAIL,
    payload: json
  };
};

export const getDetail = uri => {
  return dispatch => {
    dispatch(requestDetail());
    let api = EDAMAM_KEYS[Math.floor(Math.random() * EDAMAM_KEYS.length)];
    return fetch(
      `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${uri}&app_id=${api.appId}&app_key==${api.appKey}`
    )
      .then(response => response.json())
      .then(response => dispatch(receiveDetail(response)));
  };
};
