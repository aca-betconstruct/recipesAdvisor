import { REQUEST_DITAEL, RECEIVE_DITAEL } from '../constants';

const requestDitael = () => {
  return {
    type: REQUEST_DITAEL
  };
};

const receiveDitael = json => {
  return {
    type: RECEIVE_DITAEL,
    payload: json
  };
};

export const fetchDitael = uri => {
  return dispatch => {
    dispatch(requestDitael());
    return fetch(
      `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${uri}&app_id=a37bb1eb&app_key=3f704a5ce747891ed2b8978661054585`
    )
      .then(response => response.json())
      .then(response => dispatch(receiveDitael(response)));
  };
};
