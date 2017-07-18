import React, { Component } from 'react';
import TdItem from './TdItem';
class Table extends Component {
 constructor(props) {
    super(props);
  }  
  handleEditState(checked, taskid) {
     this.props.onEditState(checked, taskid);
  }
  render() {
    var taskList = this.props.data.map((data, i) => {
        return (<TdItem onEditState={this.handleEditState.bind(this)} data={data} id={i} key={i} />)
    });   
    return (
    <table className="table table-striped table-hover ">
        <thead>
            <tr>
            <th>#</th>
            <th rowSpan="3">All Task</th>
            </tr>
        </thead>
        <tbody>
            {taskList}
        </tbody>
    </table>       
    );
  }
}

export default Table;