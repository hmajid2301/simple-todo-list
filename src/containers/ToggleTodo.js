import React, { Component } from "react";
import { connect } from 'react-redux';

import { showUncompleted, showAll } from '../actions';


class ToggleTodo extends Component {
  state = {
    text: '',
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

export default connect()(ToggleTodo);
