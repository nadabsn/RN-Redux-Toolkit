/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';
import {addTodo} from '../redux/slices/todoSlice';
import {fetchObjects} from '../redux/actions/objectsAction';
import {useDispatch, useSelector} from 'react-redux';

function Todo() {
  const list = useSelector(state => state.todoReducer.list);
  const objects = useSelector(state => state.objectReducer.objects);
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleOnPress = () => {
    dispatch(addTodo(task));
    setTask('');
  };

  useEffect(() => {
    dispatch(fetchObjects());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTask(text)}
          placeholder="useless placeholder"
          value={task}
        />
        <Button onPress={handleOnPress} title="Add" />
        <View style={{flexDirection: 'row'}}>
          <View>
            {objects.length !== 0 ? (
              objects?.map(item => (
                <View key={item.id} style={styles.itemStyle}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              ))
            ) : (
              <ActivityIndicator />
            )}
          </View>
          <View>
            {list?.map(item => (
              <View key={item.id} style={styles.itemStyle}>
                <Text style={styles.text}>{item.task}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    paddingVertical: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStyle: {
    height: 40,
    width: 100,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    color: 'grey',
  },
});

export default Todo;
