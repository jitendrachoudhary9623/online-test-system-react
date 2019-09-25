import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AdminApp from './components/admin/AdminApp.component'
import Quiz from './components/client/Quiz.component'
import ViewQuestions from './components/admin/ViewQuestions.component'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddQuestion from './components/admin/AddQuestion.component';
ReactDOM.render(
  (<Router>
    
    <div>
      {/* Need to add authentication for each route except login */}
      <Route exact path="/" component={Quiz} />
      <Route path="/test" component={Quiz} />
      <Route path="/Admin" component={AdminApp} />
      <Route path="/ViewQuestions" component={ViewQuestions} />
      <Route path="/AddQuestion" component={AddQuestion} />

    </div>
  </Router>),
  document.getElementById('root')
);