import * as fs from 'fs';

export const api_called_file_name = "ApiCalledLogs.txt";
export const api_called_err_file_name = "ApiCalledErrorLogs.txt";
// signal error are meant to happen
export const api_called_signal_err_file_name = "ApiCalledSignalErrorLogs.txt";

function logApiCall(obj) {
    fs.appendFile(
        api_called_file_name, 
        ("\n--------- CALL ------------ \n" +
        (JSON.stringify(obj, null, 4)) +
        "\n"),
        function(err) {
            if(err) console.log(err);
        }
    );
} 

function logSignalErr(err) {
    fs.appendFile(
        api_called_err_file_name,
        ("\n-------- SINGAL ERRORS ---------- \n" +
        (JSON.stringify(err, null, 4)) +       
        "\n"),
        function(err) {
            if(err) console.log(err);
        }
    );
}


function logApiErr(err) {
    fs.appendFile(
        api_called_err_file_name,
        ("\n-------- EXCEPTION ---------- \n" +
        (JSON.stringify(err, null, 4)) +       
        "\n"),
        function(err) {
            if(err) console.log(err);
        }
    );
}

