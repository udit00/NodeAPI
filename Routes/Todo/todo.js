import express from "express";
import { CallSP } from "../../Common/call_sp.js";
import { TodoSP } from "../../Common/SP.js";
import { isBlank, getUserIP, APPNAME } from "../../Common/app.js";

const router = express.Router()

const APP_ID = APPNAME.todo;

router.post('/userLogin',async (req, res) => {
    if(isBlank(req.body['prm_useripaddress'])) {
        req.body['prm_useripaddress'] = getUserIP(req);
    }
    console.log(APP_ID)
    CallSP(TodoSP.LoginSP,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.post(`/userRegistration`,async (req, res) => {
    // console.log(req.body)
    CallSP(TodoSP.UserRegistrationSP,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.get('/getTodos',async (req, res) => {
    // console.log(req.query)
    CallSP(TodoSP.GetTodos,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});

router.post('/addTodo',async (req, res) => {
    // console.log(req.body)
    CallSP(TodoSP.AddTodo,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});


router.get('/getTodoTypes',async (req, res) => {
    // console.log(req.body)
    CallSP(TodoSP.GetTodoTypes,req,APP_ID).then(data=>{
        res.json(data);        
    }).catch((err)=>{
        res.json(err);
    })
});


router.post('/addTodoType',async (req, res) => {
    // console.log(req.body)
    CallSP(TodoSP.AddTodoType,req,APP_ID).then(data=>{
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


export default router;