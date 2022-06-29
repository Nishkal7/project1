import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import styles from './LandingPage.style';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
            navigation.navigate('Create Task')
        }}
        title="Create Task"
      />
      <Button
        onPress={() => {
          console.log('Show Tasks Created');
        }}
        title="Show My List"
      />
      <Button
        color={'red'}
        onPress={() => {
          console.log('ALERT!!');
        }}
        title="Reset Everything"
      />
    </View>
  );
};

export default LandingPage;
