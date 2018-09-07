import { REQUEST_DETAIL, RECEIVE_DETAIL } from '../constants';

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
    return fetch(
      `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${uri}&app_id=a37bb1eb&app_key=3f704a5ce747891ed2b8978661054585`
    )
      .then(response => response.json())
      .then(response => dispatch(receiveDetail(response)));
  };
};
