const mainReducer = (state = {appState: {}}, action) => {
    switch (action.type) {
      case 'SETUP':
        return {appState: action?.payload};
      case 'DELETE':
        return {appState: {}};
      default:
        return state;
    }
  };
  
  export default mainReducer;