import { SELECT_PORTFOLIO_ITEM } from "../constants";

const initialState = {
  appPreviewSelectedItem: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === SELECT_PORTFOLIO_ITEM) {
    return Object.assign({}, state, {
      appPreviewSelectedItem: action.payload
    });
  }
  return state;
}

export default rootReducer;