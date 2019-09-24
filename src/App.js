import React, { Component } from 'react';
import Quiz from './components/client_components/Quiz'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    userType:"candidate"
  }
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  
}
  
  render() {
    if (this.state.userType === "candidate") {
      return (
        <div>
<Quiz/>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar title="CDK Test" />
          Admin
        </div>
      );
    }
  }
}

export default App;
