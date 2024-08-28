import mysql from 'mysql2';
import { log } from '../Common/common_response.js';
import { getAppDBName } from '../Common/app.js';
import 'dotenv/config';

export function establishConnection(appid) {
  let dbName = getAppDBName(appid)
  if(dbName == '404') return null
  return mysql.createPool({
    host: '127.0.0.1',
    // host: '157.173.218.215',
    port:"3306",
    user:"root",
    password: process.env.LOCALHOST_PASSWORD ?? "",
    database: dbName,
    connectionLimit: 10
  }).promise();

}
