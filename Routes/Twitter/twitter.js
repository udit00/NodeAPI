import express from "express";
import { CallSP } from "../../Common/call_sp.js";
import { SP } from "../../Common/SP.js";

const router = express.Router();


// all routers in here are handling the req's that starts with 
// /loginController

router.post('/userlogin',async (req, res) => {
    console.log(req.body)
    CallSP(SP.LoginSP,req).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.get('/getPostsForUser',async (req, res) => {
    console.log(req.body)
    CallSP(SP.GetPosts, req).then(data=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
});




export default router;