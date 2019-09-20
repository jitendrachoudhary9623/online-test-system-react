import React, { Component } from 'react';
import Timer from "./Timer"
import SubmitButton from "./SubmitButton";
class QuestionPaper extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.questions;
        this.timerUpHandler = this.timerUpHandler.bind(this);
        this.score = 0;
    }
    timerUpHandler() {
        let paper = this.state;
        let score = 0;
        paper.data.map(item => {
            if (item.userAnswer == item.actualAnswer) {
                score++;
            }
        });
        this.score = score;
        //alert("Your Score is "+this.score)
        this.setState({ "data": [] });

        this.props.completeTestHandler(score);
        //this.props.completeTestHandler();
    }


    handleAnswerClick = (id, answer) => {
        let questionState = this.state;
        questionState.data[id - 1].userAnswer = "" + answer;
        for (var counter = 0; counter < questionState.data[id - 1].Answers.length; counter++) {
            if ('' + (counter + 1) === questionState.data[id - 1].userAnswer) {
                questionState.data[id - 1].Answers[counter].marked = true;
            }
            else {
                questionState.data[id - 1].Answers[counter].marked = false;
            }
        }
        this.setState({ questionState });
    }
    render() {

        return (<div>
            <Timer className="sticky" seconds={this.props.seconds} timerUpHandler={this.timerUpHandler} />
            <ul>
                {this.state.data.map(item => (
                    <ul key={item.id} className="col s10 m5 card questionBody" >
                        <li className="card-content">
                            {item.Question}
                        </li>
                        <li>
                            {item.Answers.map((ans, i) => (
                                <ul className="card-action" key={'' + item.id + i + 1}>
                                    <li onClick={this.handleAnswerClick.bind(this, item.id, i + 1)} >
                                        <div className={ans.marked === true ? "btn blue darken-1" : "btn blue-grey darken-1"}>
                                            {i + 1} . {ans.option}
                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </li>
                    </ul>
                ))}
            </ul>
            <SubmitButton />

        </div>);
    }

};

export default QuestionPaper;