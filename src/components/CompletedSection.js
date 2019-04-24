import React, { Component } from 'react';

import List from './List';

class CompletedSection extends Component {
    
    render() {
        return (
            <div className="complete">
                <div className="block">
                    <span>{this.props.list.length} Completed</span>
                    <a href="#" onClick={() => this.props.onToggleCompleteList()}>{this.props.showCompleted === true ? "Hide" : "Show"}</a>
                </div>
                {
                    this.props.showCompleted === true &&
                        <List 
                            list={this.props.list}
                            onEditTask={(id, name, value) => this.props.onEditTask(id, name, value)}
                            onDeleteTask={(id) => this.props.onDeleteTask(id)}
                        />
                }
            </div>
        );
    }
}

export default CompletedSection;
