import express from "express";
import { CallSP } from "../../Common/call_sp.js";
import { SP } from "../../Common/SP.js";

const router = express.Router()

router.post('/userlogin',async (req, res) => {
    console.log(req.body)
    (SP.LoginSP,req).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.get('/check',async (req, res) => {
    // console.log(users);
    const username = req.query.prmusername;
    const password = req.query.prmpassword;
    console.log(username);
    console.log(password);
    let user = {
        'username': username,
        'password': password
    }
    res.send(use);
});
