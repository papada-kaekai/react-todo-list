import React, { Component } from 'react';
import './App.css';

import _ from 'lodash';

import Header from './components/Header';
import CompletedSection from './components/CompletedSection';
import List from './components/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 1,
        title: 'Task 1',
        isCompleted: true,
      },
      {
        id: 2,
        title: 'Task 2',
        isCompleted: false,
      },
      {
        id: 3,
        title: 'Task 3',
        isCompleted: true,
      },
      {
        id: 4,
        title: 'Task 4',
        isCompleted: false,
      }],
      showCompleted: true,
      maxId: 4,
    }
  }

  onToggleCompleteList = () => {
    this.setState({
      'showCompleted': !this.state.showCompleted
    })
  }

  onCreateNewItem = () => {
    let newId = (this.state.maxId + 1)
    let item = {
      id: newId,
      title: 'Task ' + newId,
      isCompleted: false,
    }
    this.setState({
      'list': [...this.state.list, item],
      'maxId': newId
    })
  }

  onEditTask = (id, key, value) => {
    const newList = _.cloneDeep(this.state.list)
    const selectedItem = newList.find((item) => item.id === id)
    selectedItem[key] = value
    this.setState({
      'list': newList
    })
  }

  onDeleteTask = (id) => {
    const newList = this.state.list.filter((item) => item.id !== id)
    this.setState({
      'list': newList
    })
  }
  
  render() {

    const completedList = this.state.list.filter((item) => item.isCompleted)
    const unCompletedList = this.state.list.filter((item) => !item.isCompleted)
    
    return (
      <div className="app">
        <Header 
          title="TO DO LIST"
          onCreateNewItem={() => this.onCreateNewItem()}
        />
        <CompletedSection 
          list={completedList}
          showCompleted={this.state.showCompleted}
          onToggleCompleteList={() => this.onToggleCompleteList()}
          onEditTask={(id, name, value) => this.onEditTask(id, name, value)}
          onDeleteTask={(id) => this.onDeleteTask(id)}
        />
        <List 
          list={unCompletedList}
          onEditTask={(id, name, value) => this.onEditTask(id, name, value)}
          onDeleteTask={(id) => this.onDeleteTask(id)}
        />
      </div>
    );
  }
}

export default App;
