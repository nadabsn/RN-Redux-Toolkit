import React from 'react';
import {View, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import Todo from './src/screens/todo';
import {store} from './src/redux/store';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Todo />
      </View>
    </Provider>
  );
}
