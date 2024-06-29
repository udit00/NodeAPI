import express, { raw } from "express";
import { getResponse, log } from "./common_response.js";
import { establishConnection } from "../DB/db_connection.js";
import { customError, errorHandling } from "./error_handling.js";
import * as fs from 'fs';
import { getAppDBName } from "./app.js";
import * as LogService from "./logs.js";
// import { pool } from './database_connection_MSSQL.js';

function createQuery(sp, rawBody) {
  let params = [];
  let query = `CALL ${sp}(`;
  for (var key in rawBody) {
    query += `?,`;
    params.push(rawBody[`${key}`]);
  }
  if(Object.keys(rawBody).length != 0) {
    query = query.substring(0, query.length - 1);
  }
  query += ")"; 
  return { query : query, param: params }
}

export function CallSP(sp, req, appid) {    
  return new Promise(async (res, rej) => {
    let pool = establishConnection(appid)    
    if(pool == null) {
      rej(customError("Error Establishing Connection."));
    }
    var rawBody = req.body;
    if(Object.keys(rawBody).length == 0) {
      rawBody=req.query;      
    }
    // logApiCall(req, rawBody, appid, sp);     
    const queryObj = createQuery(sp, rawBody);  
    let rawResult = {}
    let rawErr = {}
    try {      
      rawResult = await pool.query(queryObj.query, queryObj.param);
      res(getResponse(rawResult));
    } catch (error) {
      rawErr = error
      logApiError(req, rawBody, appid, sp, error); 
      rej(errorHandling(error));
    }
    logApiCall(req, rawBody, appid, sp, rawResult, rawErr);     
  });
}

async function logApiCall(req, body, appid, sp, result, err) {
  const dbName = getAppDBName(appid);
  let finalResult = (Array.isArray(result)) ? result[0] : result;
  const apiLogs = { 
      API: req.url,
      BODY: body,
      DB: {
        APP_ID: appid,
        SP: sp, 
        DB_NAME: (dbName == '404') ? "DB NOT FOUND" : dbName       
      },
      RESULT: finalResult,
      ERROR: err
    }    
  LogService.logApiCall(apiLogs);
}

async function logApiError(req, body, appid, sp, error) {
  const dbName = getAppDBName(appid)
  const apiErrorLogs = { 
      API: req.url,
      BODY: body,
      DB: {
        APP_ID: appid,
        SP: sp, 
        DB_NAME: (dbName == '404') ? "DB NOT FOUND" : dbName       
      },
      ERROR: error
    }    
  LogService.logApiErr(apiErrorLogs);
}



// export function CallGetSP(sp, req) {
//   return new Promise(async (res, rej) => {
//     var obj=req.query
//    var params=[]
//     Object.keys(obj).map((key) => 
//       params.push(String(key),obj[key]));

//     let query = `CALL ${sp}(`;


//     for (var key in params) {
//       query += `?,`;
//       params.push(body[`${key}`]);
//     }
//     query = query.substring(0, query.length - 1) + ")";

//     try {
//       const result = await pool.query(query, params);
//       res(getResponse(result));
//     } catch (error) {
//       log(error);
//       rej(errorHandling(error));
//     }
//   });
// }

// export async function GetSP(sp, params, req) {
//   return new Promise(async (res, rej) => {
//     const request = pool.request();
//     log(req.query);
//     log(req.body);
//     for (let i = 0; i < params.length; i++) {
//       request.input(params[i], req.query[`${params[i]}`]);
//     }
//     try {
//       const result = await request.execute(`${sp}`);
//       // log(result);
//       res(result.recordsets[0]);
//     } catch (error) {
//       log(error);
//       rej(errorHandling(error));
//     }
//   });
// }

// export async function PostSP(sp, req) {
//   return new Promise(async (res, rej) => {
//     const body = req.body;

//     let query = `CALL ${sp}(`;
//     let params = [];

//     for (var key in body) {
//       query += `?,`;
//       params.push(body[`${key}`]);
//     }
//     query = query.substring(0, query.length - 1) + ")";

//     const result = await pool.query(query, params);
//     res.json(result[0]);
//   });
//}
