import React, { Component } from 'react';
import Quiz from './components/client/Quiz.component'
import AdminApp from './components/admin/AdminApp.component'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  state = {
    userType: "candidate"
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    if (this.state.userType === "candidate") {
      return (
        <div>
          <Quiz />
        </div>
      );
    } else {
      return (
        <div>
          <AdminApp />
        </div>
      );
    }
  }
}

export default App;
