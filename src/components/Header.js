import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <h3>{this.props.title}</h3>
            <div className="block">
                <span className="header-title">New List</span>
                <button className="header-button" onClick={() => this.props.onCreateNewItem()}><i class="fas fa-plus"></i></button>
            </div>
        </div>
    );
  }
}

export default Header;
