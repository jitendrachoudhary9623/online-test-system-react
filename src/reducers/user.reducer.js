import UPDATE_LOGIN from "../actions/user.action"
export default function userReducer(state={username:"",loggedIn:false},{type,payload}){

    if(type=='users_updateLogin'){
    return payload;
    }
    return state;
  }