import React, { Component } from 'react';

class TdItem extends Component {
 constructor(props) {
    super(props);
  } 
  handleChange(e, id) {
     this.props.onEditState(e.target.checked, this.props.data);
  }
  render() {
    return (
        <tr>
            <td><input type="checkbox" onChange={this.handleChange.bind(this)} checked={this.props.data.isCompleted} /></td>
            <td>{this.props.data.text}</td>
        </tr>
    );
  }
}

export default TdItem;