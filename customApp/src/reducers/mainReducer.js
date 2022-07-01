const mainReducer = (state = {appState: null}, action) => {
    switch (action.type) {
      case 'SETUP':
        return {appState: action?.payload};
      case 'DELETE':
        return {appState: null};
      default:
        return state;
    }
  };
  
  export default mainReducer;