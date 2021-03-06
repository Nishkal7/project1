export const setup = data => async dispatch => {
    console.log("DATA", data)
    try {
      dispatch({type: 'SETUP', payload: data});
    } catch (error) {
      dispatch({type: 'SETUP', payload: {}});
    }
  };

  export const deleteTasks = () => async dispatch => {
    dispatch({type: 'DELETE', payload: {}});
  };