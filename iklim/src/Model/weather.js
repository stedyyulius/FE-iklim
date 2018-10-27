const initialState = []

export default (state = initialState, action) => {
  if (action.type === 'weathers') {
    return action.payload;
  }
  return state
}
