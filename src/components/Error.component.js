import React,{Component} from "react";

class ErrorComponent extends Component{

    render(){
        return (<div className="row card" style={{margin:"2%",padding:"5%",width:"70vw",height:"50vh"}}>
            {this.props.errorMessage}
        </div> );
    }
}

export default ErrorComponent;
