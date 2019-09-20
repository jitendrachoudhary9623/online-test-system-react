import React, { Component } from 'react';

export default class ScoreCard extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="row col s12 card card-content center-align">
                <span className="card-title">Your Score for this test is</span>
                <h3>{this.props.score}</h3>
            </div>
        );
    }
}

