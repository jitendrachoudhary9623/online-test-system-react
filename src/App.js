import React, { Component } from 'react';
import QuestionPaper from './components/QuestionPaper'
import NavBar from './NavBar'
import ScoreCard from './components/ScoreCard'

class App extends Component {
  state = {
    "data": [
      {
        "id": 1,
        "type": "objective",
        "Question": "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
        "Answers": [{ option: "6.54 sec", marked: false }, { option: "44.32 sec", marked: false }, { option: "55 sec", marked: false }, { option: "30.2 sec", marked: false }],
        "userAnswer": "",
        "actualAnswer": "1"
      },
      {
        "id": 2,
        "type": "objective",
        "Question": "Devesh can cover a certain distance in 1 hour 24 minutes by covering two-third of the distance at 6 km/hour and the rest at 7 km/hr. Calculate total distance.",
        "Answers": [{ option: "8 km", marked: false }, { option: "9 km", marked: false }, { option: "6 km", marked: false }, { option: "7.5 km", marked: false }],
        "userAnswer": "",
        "actualAnswer": "3"
      },
      {
        "id": 3,
        "type": "objective",
        "Question": "A train 120 meters long is running with a speed of 60 km/hr. In what time will it pass a boy who is running at 6 km/hr in the direction opposite to that in which the train is going?",
        "Answers": [{ option: "6.54 sec", marked: false }, { option: "44.32 sec", marked: false }, { option: "55 sec", marked: false }, { option: "30.2 sec", marked: false }],
        "userAnswer": "",
        "actualAnswer": "1"
      },
      {
        "id": 4,
        "type": "objective",
        "Question": "Devesh can cover a certain distance in 1 hour 24 minutes by covering two-third of the distance at 6 km/hour and the rest at 7 km/hr. Calculate total distance.",
        "Answers": [{ option: "8 km", marked: false }, { option: "9 km", marked: false }, { option: "6 km", marked: false }, { option: "7.5 km", marked: false }],
        "userAnswer": "",
        "actualAnswer": "3"
      }
    ],
    score: ""
  }
  constructor(props) {
    super(props);
    this.completeTestHandler = this.completeTestHandler.bind(this);
  }
  completeTestHandler(score) {
    this.setState({ data: "", score: score })
  }
  render() {
    if (this.state.score === "") {
      return (
        <div>
          <NavBar title="CDK Test" />
          <QuestionPaper questions={this.state} seconds={5} completeTestHandler={this.completeTestHandler} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar title="CDK Test" />
          <ScoreCard score={this.state.score} style={{margin:3}}/>
        </div>
      );
    }
  }
}

export default App;
