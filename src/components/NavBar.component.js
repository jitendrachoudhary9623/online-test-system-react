import React,{Component} from 'react';
class NavBar extends Component{
    constructor(props){
      super(props);
    }    
    
    render(){
        return (<div className="grey navbar-fixed ">
        <nav>
          <div className="nav-wrapper">
            <span className="brand-logo pad-2 left blue-text text-darken-2" style={{marginLeft:30}}>{this.props.title}</span>
            <ul className="right" style={{marginRight:30}}>
            <li>Welcome User </li>
            </ul>
          </div>
        </nav>
      </div>
            )
    }
}

NavBar.defaultProps={
  title:"CDK Test",
  username:"user"
}
export default NavBar;