import React, { Component } from "react";
import NavBar from "../NavBar.component";
import QuestionsTable from "./questions-table.component";
import SideBar from './SideBar.component';
import baseURL from "../../utils/API"
import UpdateQuestion from "../admin/UpdateQuestion.component"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const axios = require("axios");

class DeleteQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionSet: null
    };
  }

  componentWillMount() {
    //Modal open.
    console.log("on init...");
    this.getAllQuestions();
  }

  getAllQuestions() {
    axios
      .get(`${baseURL}/question`)
      .then(response => {
        // handle success
        console.log(response);
        this.setState({ questionSet: response.data });
        console.log(this.state.questionSet);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
        //Modal closed.
        console.log("Finally block");
      });
  }

  render() {
    if (this.state.questionSet == null) {
      return <div>Loading</div>;
    }
    return (
      <div >
      <NavBar isLoggedIn={true} />
      <div className="row">
                    <div className="col s2" style={{ height: "89vh", backgroundColor: "white" }}>
                        <SideBar />
                    </div>
                    <div className="col s10 scrollable">
        
            <h6 className="center">View Questions:</h6>
            <QuestionsTable
              dataList={this.state.questionSet}
              onRemoveQ={this.removeQuestionId}
            />
          </div>
          <div className={"col m1"}></div>
        </div>
      </div>
    );
  }

  removeQuestionId = ques => {
    console.log("Hey ques is ", ques);

    this.setState({
      questionSet: this.state.questionSet.filter(
        question => question.id !== ques.id
      )
    });

    // let reqData = {
    //   data: this.state.questionSet
    // };
    axios
      .post(`${baseURL}/question/delete/${parseInt(ques.id)}`)
      .then(res => {
        console.log(res);
        console.log(ques.id);
      });
  };
}

export default DeleteQuestion;
