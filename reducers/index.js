import produce from "immer";

const baseState = {
  generalnews: {}
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case 'FETCH_GENERAL_NEWS':
      state.generalnews = {};
      action.payload.forEach(gnews => {
        state.generalnews[gnews.headline] = gnews;
      })
      break;
    default:
      break;
  }
}, baseState);

export default reducer;