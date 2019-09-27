import React, { Component } from 'react';

class OptionInput extends Component {
    state = {
        optionText: ""
    }

    constructor(props) {
        super(props);
    }

    handleOptionChange = () => {
        this.props.handleOptionClick(this.props.optionNo);
    }
    handleTextChange = (e) => {
        let tempState = this.state;
        tempState.optionText = e.target.value;
        this.setState(tempState);
        this.props.handleInputTextBox(this.props.optionNo, this.state.optionText);
    }
    render() {
        return (
            <div className="row">
                <div className="col s5">
                    <label htmlFor ="option">Option {this.props.optionNo}</label>
                    <input id="option" type="text" placeholder={`Enter Option ${this.props.optionNo}`} onChange={this.handleTextChange} value={this.state.optionText} ></input>
                </div>
                <div className="col s1">
                    <label>is Answer</label><br />
                    <label>
                        <input type="radio" className="with-gap" name="radio" onChange={this.handleOptionChange} />
                        <span></span>
                    </label></div>
            </div>
        )
    }
}

export default OptionInput;