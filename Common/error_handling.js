import { log } from "./common_response.js";



export function errorHandling(error){
    let commonResponse = {
        message : "",
        status : 1,
        success : true,
        data: {},
      }
    commonResponse.status = -1;
    commonResponse.success = false;    
    commonResponse.message = error.sqlMessage;
    commonResponse.data= JSON.stringify(commonResponse.data)
    return commonResponse;
}

export function customError(msg) {
    let commonResponse = {
        message : "",
        status : 1,
        success : true,
        data: {},
      }
    commonResponse.status = -1;
    commonResponse.success = false;    
    commonResponse.message = msg;
    return commonResponse
}

