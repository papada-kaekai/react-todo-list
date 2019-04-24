import React, { Component } from 'react';

import ItemList from './ItemList';

class List extends Component {
  render() {
    return (
        <ul>
            {
                this.props.list.map((item) => {
                    return (
                        <ItemList 
                            item={item}
                            onEditTask={(id, name, value) => this.props.onEditTask(id, name, value)}
                            onDeleteTask={(id) => this.props.onDeleteTask(id)}
                        />
                    )
                })
            }
        </ul>
    );
  }
}

export default List;
