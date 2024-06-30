

export function getResponse(response){
    let commonResponse = {
        message : "",
        status : 1,
        success : true,
        data: {},
      }
      
    let jsonResp = [];  
    for(let i=0; i<response[0].length; i++){
        if(i!=(response[0].length-1)){
            // commonResponse.data[`result_${i}`]= response[0][i];
            // commonResponse.data[`result_${i}`]= 
            jsonResp.push(response[0][i]);
        }            
    }    
    // commonResponse.data= JSON.stringify(commonResponse.data)
    commonResponse.data = jsonResp;
    return commonResponse;

    // commonResponse.data= JSON.stringify(commonResponse.data)
    // for(let i=0; i<response[0].length; i++){
    //     if(i!=(response[0].length-1)){
    //         commonResponse.data.push({[`Table_${i}`]: response[0][i]});
    //     }     
    // }
    // return commonResponse;
}

export function log(printable){
    console.log(printable);
}

export const errorMap = [{
    "key": 2812,
    "value": 'Incorrect Stored Procedure '
},{
    "key": 201,
    "value": `Stored Procedure expects some extra parameter which was not provided.`
},{
    "key": 8146,
    "value": `Stored Procedure was given extra parameter which wasn't required.`
}
]

