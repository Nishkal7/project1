import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { SCALE_FACTOR } from "./helpers/ScaleFactor";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70 * SCALE_FACTOR,
    backgroundColor:"red",
  },
});

export default App;
