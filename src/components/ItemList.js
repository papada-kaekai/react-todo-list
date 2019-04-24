import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    return (
        <li>
            <input 
                type="checkbox" 
                value={this.props.item.isCompleted} 
                checked={this.props.item.isCompleted}
                onChange={()=>this.props.onEditTask(this.props.item.id, 'isCompleted', !this.props.item.isCompleted)}
            />
            <input 
                type="text" 
                value={this.props.item.title} 
                onChange={(event)=>this.props.onEditTask(this.props.item.id, 'title', event.target.value)}
            />
            <button 
                onClick={()=>this.props.onDeleteTask(this.props.item.id)}>
                <i class="fas fa-times"></i>
            </button>
        </li>
    );
  }
}

export default ItemList;
