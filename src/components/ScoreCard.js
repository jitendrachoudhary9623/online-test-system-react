import React, { Component } from 'react';

export default class ScoreCard extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content center-align">
                                <span className="card-title">Your Score for this test is</span>
                                <h3>{this.props.score}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

