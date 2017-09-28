import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      edited: false,
      completed: false,
      content: '',
    };
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Create a Note:
        <input
          type='text'
          name='note'
          placeholder='...'
          value={this.state.content}
          onChange={this.handleContentChange}/>
        </label>
        <button type="submit">Add Note</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  render(){
    return(
      <div>
        <NoteCreateForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
