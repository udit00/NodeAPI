import { log } from "./common_response.js";



export function errorHandling(error){
    const errorResponse = {
        message : error.sqlMessage,
        status : -1,
        success : (error?.code === 'ER_SIGNAL_EXCEPTION') ? true : false, 
        data: {},
        // data: JSON.stringify(error, null, 4),
      }
    // commonResponse.status = -1;
    // commonResponse.success = false;    
    // commonResponse.message = error.sqlMessage;
    // commonResponse.data= JSON.stringify(commonResponse.data)
    return errorResponse;
}

export function customError(msg) {
    const customErrorResponse = {
        message : msg,
        status : -1,
        success : true,
        data: {},
      }
    // commonResponse.status = -1;
    // commonResponse.success = false;    
    // commonResponse.message = msg;
    return customErrorResponse;
}

