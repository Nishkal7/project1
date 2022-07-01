import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {deleteTasks, setup} from '../actions/mainReducerActions';
import styles from './LandingPage.style';
import {useSelector, useDispatch} from 'react-redux';
import {mockList} from '../helpers/mockList';

const LandingPage = ({navigation}) => {
  const dispatch = useDispatch();
  const stateData = useSelector(state => state);
  const [tasksData, setTasksData] = useState({});

  useEffect(() => {
    dispatch(setup(mockList));
  }, []);

  useEffect(() => {
    console.log('STATE DATA', stateData);
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
          navigation.navigate('ShowList');
        }}
        title="Show My List"
      />
      <Button
        color={'red'}
        onPress={() => {
          dispatch(deleteTasks());
        }}
        title="Reset Everything"
      />
    </View>
  );
};

export default LandingPage;
