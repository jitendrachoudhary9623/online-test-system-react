import React, { Component } from 'react';

class Answer extends Component{
    constructor(props){
        super(props);
        let ans=this.props.ans;
        this.setState({ans});
    }

    render(){
        return (
            <div> {item.Answers.map((ans, i) => (
            <ul className="card-action" key={'' + item.id + i + 1}>
                <li onClick={this.handleAnswerClick(item.id, i + 1)} >
                    <div className={ans.marked === true ? "btn blue darken-1" : "btn blue-grey darken-1"}>
                        {i + 1} . {ans.option}
                    </div>
                </li>
            </ul>
        ))}
        </div>)
    }
}
export default Answer;