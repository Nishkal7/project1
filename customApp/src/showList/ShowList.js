import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './ShowList.style';

const ShowList = () => {
  const taskList = useSelector(state => state?.mainReducer?.appState);
  const [tasks, setTasks] = useState(taskList ?? {});

  useEffect(() => {
    console.log('tasks to Show', tasks);
    setTasks(taskList);
  }, [tasks]);

  return (
    <View style={styles.container}>
      {tasks && tasks.length ? (
        tasks.map((val, index) => <Text key={index}>{val.name}</Text>)
      ) : (
        <Text>No Tasks at this moment</Text>
      )}
    </View>
  );
};

export default ShowList;
