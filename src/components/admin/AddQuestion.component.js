import React, { Component } from 'react';
import SideBar from './SideBar.component';
import NavBar from '../NavBar.component'
import OptionInput from './OptionInput.component'
class AddQuestion extends Component {

    render() {
        return (<div>
            <div>
                <NavBar isLoggedIn={true} />
                <div className="row">
                    <div className="col s2" style={{ height: "89vh", backgroundColor: "white" }}>
                        <SideBar />
                    </div>
                    <div className="col s10 scrollable">

                        <div className="row col s10 card" style={{ margin: 30 }}>

                            <form class="col s12">
                                <div class="row">
                                    <br />
                                    <div class="col s12">
                                        <label for="textarea1">Enter Question</label>
                                        <textarea rows="50" id="textarea1" placeholder="Enter Question"></textarea>
                                    </div>
                                    <div style={{ margin: 20 }}>
                                        <OptionInput optionNo="1" />
                                        <OptionInput optionNo="2" />
                                        <OptionInput optionNo="3" />
                                        <OptionInput optionNo="4" />
                                    </div>
                                    <div className="center-align">
                                    <input type="button" className="btn" value="Add Question"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default AddQuestion;