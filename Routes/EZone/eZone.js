import express from "express";
import { CallSP } from "../../Common/call_sp.js";
import { eZoneSP } from "../../Common/SP.js";
import { isBlank, getUserIP, APPNAME } from "../../Common/app.js";

const router = express.Router()

const APP_ID = APPNAME.ezone;

router.post('/userLogin',async (req, res) => {
    if(isBlank(req.body['prm_useripaddress'])) {
        req.body['prm_useripaddress'] = getUserIP(req);
    }
    console.log(APP_ID);
    CallSP(eZoneSP.LoginSP,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});


router.post(`/userRegistration`,async (req, res) => {
    // console.log(req.body)
    CallSP(eZoneSP.UserRegistrationSP,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

export default router;