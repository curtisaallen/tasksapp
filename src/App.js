import React, { Component } from 'react';
import axios from 'axios';
import Header from './Component/Header';
import Input from './Component/Input';
import Table from './Component/Table';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      task: []
    };
  }
  componentDidMount(){
    this.getTask();
  }
  getTask(){
    axios.get('https://api.mlab.com/api/1/databases/meantodos/collections/todos?apiKey=3GPLIB3ha9CExmlKi-BDEQwaB8Y-St4l')
      .then((response) => {
        this.setState({
           task: response.data
         });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  addTask(value) {
    axios.post('https://api.mlab.com/api/1/databases/meantodos/collections/todos?apiKey=3GPLIB3ha9CExmlKi-BDEQwaB8Y-St4l', {
      text: value,
      isCompleted: false
    }).then((response) => {
        this.getTask();
        document.getElementById("focusedInput").value = " ";
        })
        .catch((error) => {
          console.log(error);
      });
  }

  handleChange(value) {
    this.setState({
      input: value
    });
  }
  handleAdd() {
    this.addTask(this.state.input);
  }
  editState(checked, taskid) {
    axios.request({
      method: 'put',
      url: 'https://api.mlab.com/api/1/databases/meantodos/collections/todos/'+taskid._id.$oid+'?apiKey=3GPLIB3ha9CExmlKi-BDEQwaB8Y-St4l',
      data: {
       text: taskid.text,
       isCompleted: checked 
      }
    }).then((response) => {
        this.getTask();
    }).catch((error) => {
        console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                 <Input onInput={this.handleChange.bind(this)} />
                 <Table onEditState={this.editState.bind(this)} data={this.state.task} />
                <a href="#" className="btn btn-primary" onClick={this.handleAdd.bind(this)}>Add Task</a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
