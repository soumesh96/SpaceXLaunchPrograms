import { FETCH_ALL_LAUNCHES, FETCH_FILTERED_LAUNCHES, DATA_FETCHING, DATA_FETCHED } from '../actions/constants';

import { initialState } from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_LAUNCHES:
      return {
        ...state,
        launchesData: action.payload.data,
        isDataFetched: true,
      };
    case FETCH_FILTERED_LAUNCHES:
      return {
        ...state,
        launchesData: action.payload.data,
      };
    case DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DATA_FETCHED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state
  }
}