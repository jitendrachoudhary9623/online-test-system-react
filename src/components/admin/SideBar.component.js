import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class SideBar extends Component{
render(){
    return( 
    <ul>
        <li className="sidebar-item">
          <a href="#" className="center-align">Question Bank</a>
          <ul>
          <li className="sidebar-sub-item">
            <Link to="/ViewQuestions" className="center-align">View Question</Link>

          </li>
          <li className="sidebar-sub-item">
            <Link to="/AddQuestion" className="center-align">Add Question</Link>
          </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#">Create test</a>
        </li>
        <li className="sidebar-item">
          <a href="#">Logout</a>
        </li>
      </ul>
    )
}
}

export default SideBar;