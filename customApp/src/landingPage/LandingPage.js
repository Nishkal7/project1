import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {setup} from '../actions/mainReducerActions';
import styles from './LandingPage.style';
import {useSelector, useDispatch} from 'react-redux';

const LandingPage = ({navigation}) => {
  const dispatch = useDispatch();
  const stateData = useSelector(state => state);
  const [tasksData, setTasksData] = useState(null);

  useEffect(() => {
    dispatch(setup('CHECKING STUFF FOR NOW'));
  }, []);

  useEffect(() => {
    // dispatch(setup('CHECKING STUFF FOR NOW'));
    console.log("STATE DATA", stateData)
    setTasksData(stateData);
  }, [tasksData]);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('Create Task');
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
