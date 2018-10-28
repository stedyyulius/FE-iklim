const initialState = 'Select a city';

export default (state = initialState, action) => {
  if (action.type === 'city') {
    return action.payload;
  }
  return state
}
