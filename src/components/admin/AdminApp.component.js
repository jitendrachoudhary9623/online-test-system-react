import React, { Component } from 'react';
import NavBar from '../NavBar.component'
class AdminApp extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col s2" style={{ height: "100vh", backgroundColor: "white" }}>
            <ul>
              <li>
                <a href="#" className="center-align">Question Bank</a>
              </li>
              <li>
                <a href="">Create test</a>
              </li>
            </ul>
          </div>
          <div class="col s10">
            <div class="container">

              container will be rendered here
        </div>
          </div>
        </div>



      </div>
    )
  }
}

export default AdminApp;