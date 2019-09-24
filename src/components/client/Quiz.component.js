import React, { Component } from 'react';
import QuestionPaper from './QuestionPaper.component'
import NavBar from '../NavBar.component'
import ScoreCard from './ScoreCard.component'
import dataSource from '../../datasource/mockData'

class Quiz extends Component {
  state = {
    data: dataSource ,
    score: "",
    userType:""
  }
  constructor(props) {
    super(props);
    this.completeTestHandler = this.completeTestHandler.bind(this);
  }
  componentDidMount(){
   /*
    let url="http://localhost:8080/questions/";
    fetch(url).then(res => res.json()).then((result)=>{
        console.log("initial data",this.state);
        let tempState=this.state;
        tempState.data=result.questionsList;
        this.setState(tempState);
        console.log("data fetched",this.state);
    },
    (err)=>{
        console.log(err);
    });
    */
}
componentWillUnmount(){

}
  completeTestHandler(score) {
    this.setState({ data: "", score: score })
  }
  render() {
    if (this.state.score === "") {
      return (
        <div>
          <NavBar title="CDK Test" />
          <QuestionPaper questions={this.state} seconds={90} completeTestHandler={this.completeTestHandler} />
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

export default Quiz;
