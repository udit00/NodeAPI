import express from "express";
import { CallSP } from "../../Common/call_sp.js";
import { TwitterSP } from "../../Common/SP.js";
import { APPNAME } from "../../Common/app.js";

const router = express.Router();

const APP_ID = APPNAME.twitter;

// all routers in here are handling the req's that starts with 
// /loginController

router.post('/userlogin',async (req, res) => {
    console.log(req.body)
    CallSP(TwitterSP.LoginSP,req, APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.get('/getpostsforuser',async (req, res) => {
    console.log(req.body)
    CallSP(SP.GetPosts, req, APP_ID).then(data=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
});




export default router;