import React, { Component } from 'react';

class OptionInput extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s10">
                    <label for="option">Enter Option {this.props.optionNo}</label>
                    <input id="option" type="text" placeholder={`Enter Option ${this.props.optionNo}`} ></input>
                </div>
                <div className="col s2">
                    <label>is Answer</label><br/>
                    <label>
                        <input type="radio" class="with-gap" name="radio"/>
                        <span></span>
                    </label></div>
            </div>
        )
    }
}

export default OptionInput;