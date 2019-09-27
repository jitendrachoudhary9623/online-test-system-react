import baseURL from "../API"
import axios from "axios";

const addQuestionToDb=(data)=>{
    let add_url=baseURL+"Add";
    try{
    axios.post(add_url,data).then(
        (res)=>{
            console.log(res);
            return res}
    ).catch((err)=>{
        return err;
    });
     
    }catch(e){
        return {err:e};
    }
};

export default addQuestionToDb;