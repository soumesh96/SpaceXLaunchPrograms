import axios from 'axios';

import { FETCH_ALL_LAUNCHES, FETCH_ALL_LAUNCHES_API, FETCH_FILTERED_LAUNCHES, DATA_FETCHING, DATA_FETCHED } from './constants';

export const fetchAllLaunches = () => async (dispatch) => {
  try {
    const res = await axios.get(FETCH_ALL_LAUNCHES_API);
    const { status, data } = res;
    if (status === 200) {
      dispatch({
        type: FETCH_ALL_LAUNCHES,
        payload: {
          data: data,
        }
      })
    }
  } catch (err) {
    console.error('error', err);
  }
}

export const fetchFilterLaunches = (datapack) => async (dispatch) => {
  try {
    dispatch({ type: DATA_FETCHING });
    const { launch_success, land_success, launch_year } = datapack;
    const res = await axios.get(`${FETCH_ALL_LAUNCHES_API}&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`);
    const { status, data } = res;
    if (status === 200) {
      dispatch({
        type: FETCH_FILTERED_LAUNCHES,
        payload: {
          data: data,
        }
      });
      dispatch({ type: DATA_FETCHED });
    }
  } catch (err) {
    console.error('error', err);
    dispatch({ type: DATA_FETCHED });
  }
}