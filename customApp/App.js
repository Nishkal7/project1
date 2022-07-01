import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import {Provider} from 'react-redux';
import {applyMiddleware, compose} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: 70 * SCALE_FACTOR,
//     backgroundColor:"red",
//   },
// });

export default App;
