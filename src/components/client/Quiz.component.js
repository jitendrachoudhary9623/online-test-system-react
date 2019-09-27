import React, { Component } from 'react';
import QuestionPaper from './QuestionPaper.component'
import NavBar from '../NavBar.component'
import ScoreCard from './ScoreCard.component'
import dataSource from '../../datasource/mockData'
import axios from "axios";
import baseURL from "../../utils/API"


class Quiz extends Component {
  state = {
    data: dataSource,
    score: "",
    userType: "",
    dataFetched: false
  }
  constructor(props) {
    super(props);
    let getAll = baseURL + "getAll";

    axios.get(getAll, this.state).then(
      (res) => {
        if (res.status == 200) {
          let datasource = [];

          for (var counter = 0; counter < res.data.length; counter++) {
            let dataModel = new Object();
            dataModel.Question = res.data[counter].question;
            dataModel.actualAnswer = "" + res.data[counter].ans_option;
            dataModel.id = counter + 1;
            dataModel.userAnswer = "";
            dataModel.type = "objective";
            let Answers = [];
            Answers.push({ "option": res.data[counter].option1, marked: false });
            Answers.push({ "option": res.data[counter].option2, marked: false });
            Answers.push({ "option": res.data[counter].option3, marked: false });
            Answers.push({ "option": res.data[counter].option4, marked: false });
            dataModel.Answers = Answers;
            datasource.push(dataModel);
          }
          let tempState = this.state;
          tempState.data = datasource;
          tempState.dataFetched = true;
          this.setState(tempState);
        }
        else {
          alert("Something went wrong");
        }
      }
    ).catch((err) => {
      alert("Something went wrong", err);
      console.log(err);
    });
    this.completeTestHandler = this.completeTestHandler.bind(this);

  }

  componentDidMount() {

  }
  completeTestHandler(score) {
    this.setState({ data: "", score: score })
  }
  render() {
    if (this.state.score === "") {
      if (this.state.dataFetched) {
        return (
          <div>
            <NavBar title="CDK Test" isLoggedIn={true} />
            <QuestionPaper questions={this.state} seconds={300} completeTestHandler={this.completeTestHandler} />
          </div>
        );
      } else {
        return (<div>Data is been fetched</div>);
      }
    } else {
      return (
        <div>
          <NavBar title="CDK Test" isLoggedIn={true} />
          <ScoreCard score={this.state.score} style={{ margin: 3 }} />
        </div>
      );
    }
  }
}

export default Quiz;
