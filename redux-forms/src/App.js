import React, { Component } from 'react'
import LoginForm from './components';

export default class App extends Component {
  submit = (values) => {
    window.alert(JSON.stringify(values));
  }
  render() {
      return (
      <div className="w-100 tc pa2">
          <span className="f1 sans-serif b">Redux Form</span>
          <LoginForm onSubmit={this.submit}/>
      </div>
    );
  }
}

