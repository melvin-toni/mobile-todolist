import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
    console.log(todoList);
  }

  return (
    <View>
      <Header title="Todo App"/>
      
      <View style={styles.container}>
        <View>
          <TextInput 
            placeholder="Enter todo item sadboy" 
            style={styles.tI}
            onChangeText={text => setTodoItem(text)}
            value={todoItem}
          />
          <Button 
            title="Add"
            onPress={addTodoList}
          />
        </View>

        <ScrollView>
          {todoList.map((todo, i) => 
            <View key={todo+i} style={styles.todoItem}><Text>{todo}</Text></View>)
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  tI: {
    padding: 10,
    borderColor: '#000',
    marginBottom: 10,
    borderWidth: 1
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray'
  }
});
