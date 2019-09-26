import React, { Component } from 'react';
import NavBar from './NavBar.component';
import { Redirect } from "react-router"

class Loginform extends Component {
    state = {
        emailError: "",
        passError: ""
    }
    validatForm = (username, password) => {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!(emailPattern.test(username))) {
            let tempState = this.state;
            tempState.emailError = "invalid username";
            tempState.passError = "";
            this.setState(tempState);
            return false;
        } else if (!(passw.test(password))) {
            let tempState = this.state;
            tempState.emailError = "";
            tempState.passError = "entered password is incorrect";
            this.setState(tempState);
            return false;
        }
        else {
            return true;
        }
    }

    handleSignIn(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        const isValid = this.validatForm(username, password);
        if (isValid) {
            console.log(username);
            console.log(password.length);
            //this.props.onSignIn(username, password);
           // <Redirect to="/test" />
           this.props.history.push("/test");
        }

    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="row">
                    <div className="col s7">
                        <div className="card" style={{ margin: "1%" }}>
                            <div className="center-align card-title">CDK Test Platform</div>
                            <ul class="collection center-align" style={{ height: "70vh" }}>
                                <li class="collection-item">CDK's Hiring Platform</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col s5 card" style={{ padding: "3%", height: "85vh" }}>
                        <div>
                            <form onSubmit={this.handleSignIn.bind(this)}>
                                <h4>Sign in</h4>
                                <div className="row input-field col s12">
                                    <input type="text" className="row card" ref="username" id="username" style={{ backgroundColor: "#eeeeee" }} required />
                                    <label for="username">Enter email</label>
                                </div>
                                <div className="row right-align" style={{ textAlign: "justify", color: "red" }}>{`${this.state.emailError}`}</div>
                                <div className="row input-field col s12">
                                    <input type="password" className="row card" ref="password" id="password" style={{ backgroundColor: "#eeeeee" }} required />
                                    <label for="password">Enter password</label>
                                </div>
                                <div className="row center-align" style={{ textAlign: "justify", color: "red" }}>{`${this.state.passError}`}</div>
                                <div style={{ marginBottom: "5%" }}>
                                    <input className="col s12 m-2 center-align btn waves-effect waves-light blue darken-1 buttonStyle" type="submit" value="Login" />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loginform;