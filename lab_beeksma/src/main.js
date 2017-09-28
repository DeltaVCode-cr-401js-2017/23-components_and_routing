import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



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
        <h1>Hey I am a thing</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
