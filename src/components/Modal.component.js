import React,{Component} from 'react';
import Question from './client/Question.component';
const display = {
  display: 'block'
};
const hide = {
  visibilty: 'hidden'
};
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }
  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal=[];

    modal.push(
      <div>
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <h4>{this.props.question.question}</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a className="btn" onClick={this.toggle}>Update</a>
      </div>
    </div>
    </div>
    );
    return (
      <div >
        <a className="btn" onClick={this.toggle}>Update</a>
        {modal}
      </div>
    );
  }
}

export default Modal;