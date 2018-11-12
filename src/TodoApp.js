import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  }
});

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}
