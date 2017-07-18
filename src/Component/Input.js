import React, { Component } from 'react';

class Input extends Component {
 constructor(props) {
    super(props);
  }
  handleChange(event) {
    this.props.onInput(event.target.value);
  }  
  render() {
    return (
    <div className="form-group">
        <label className="control-label">Add Task</label>
        <input className="form-control" id="focusedInput" type="text" placeholder="Add your task right now..." onChange={this.handleChange.bind(this)} />
    </div>       
    );
  }
}

export default Input;