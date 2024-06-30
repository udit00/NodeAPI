import * as fs from 'fs';
const logs_folder_name = "Logs"
const api_called_file_name = `${logs_folder_name}/ApiCalledLogs.txt`;
const api_called_test_file_name = `${logs_folder_name}/test.txt`;
const api_called_err_file_name = `${logs_folder_name}/ApiCalledErrorLogs.txt`;
// signal error are meant to happen
const api_called_signal_err_file_name = `${logs_folder_name}/ApiCalledSignalErrorLogs.txt`;

export function logApiCall(obj) {
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

const jsonCircularReplacer = (replaceCircularsWith) => {
  const known = new WeakSet();
  return (key, value) => {
    if ((typeof value === "object" && value !== null) ||
        typeof value === "function") {
      if (known.has(value)) {
        return (replaceCircularsWith !== undefined )
              ?   replaceCircularsWith
              :  "~CIRCULAR~"
      }
      known.add(value);
    }
    return value;
    }
}

export function logReq(obj) {    
    fs.appendFile(
        api_called_test_file_name, 
        // ("\n--------- TEST ------------ \n" +
        // (JSON.stringify(obj, null, 4)) +
        // "\n"),
        JSON.stringify(obj, jsonCircularReplacer(), 4),
        function(err) {
            if(err) console.log(err);
        }
    );
} 

export function logApiErr(logObj) {
    let fileName = api_called_signal_err_file_name
    let headerPrefix = "\n-------- SINGAL ERRORS ---------- \n";
    if(logObj.ERROR.code !== 'ER_SIGNAL_EXCEPTION') {
        fileName = api_called_err_file_name
        headerPrefix = "\n-------- EXCEPTION ---------- \n";
    }
    fs.appendFile(
        fileName,
        ( headerPrefix + (JSON.stringify(logObj, null, 4)) + "\n" ),
        function(err) {
            if(err) console.log(err);
        }
    );
}

// export function logSignalErr(err) {
//     fs.appendFile(
//         api_called_signal_err_file_name,
//         ("\n-------- SINGAL ERRORS ---------- \n" +
//         (JSON.stringify(err, null, 4)) +       
//         "\n"),
//         function(err) {
//             if(err) console.log(err);
//         }
//     );
// }


// export function logApiErr(err) {
//     fs.appendFile(
//         api_called_err_file_name,
//         ("\n-------- EXCEPTION ---------- \n" +
//         (JSON.stringify(err, null, 4)) +       
//         "\n"),
//         function(err) {
//             if(err) console.log(err);
//         }
//     );
// }

