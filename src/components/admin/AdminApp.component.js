import React, { Component } from 'react';
import NavBar from '../NavBar.component'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class AdminApp extends Component {

  render() {
    return (
      <div>
        
        <NavBar />
        <div className="row">
          <div className="col s2" style={{ height: "87vh", backgroundColor: "white" }}>
            <ul>
              <li className="sidebar-item">
                <a href="#" className="center-align">Question Bank</a>
              </li>
              <li className="sidebar-item">
                <a href="#">Create test</a>
              </li>
              <li className="sidebar-item">
                <a href="#">Logout</a>
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