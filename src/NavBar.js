import React,{Component} from 'react';
class NavBar extends Component{

    constructor(props){
      super(props);
    }

    
    render(){
        return (<div className="grey darken-1 navbar-fixed ">
        <nav>
          <div className="nav-wrapper">
            <span className="brand-logo pad-2 left">{this.props.title}</span>
            <ul className="right">
            </ul>
          </div>
        </nav>
      </div>
            )
    }
}

NavBar.defaultProps={
  title:"CDK Test"
}
export default NavBar;