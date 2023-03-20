import { GET_GREETING } from './Api';

const initialState = {
  greeting: {},
  isLoading: false,
};

const greetingReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${GET_GREETING}/fulfilled`:
      return { ...state, greeting: payload, isLoading: false };

    case `${GET_GREETING}/pending`:
      return { ...state, isLoading: true };

    case `${GET_GREETING}/rejected`:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default greetingReducer;
