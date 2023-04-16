import express from "express";
import { pool } from '../database_connection.js'
const router = express.Router();
 

// all routers in here are handling the req's that starts with 
// http://localhost:5000/userController/getAllUsers
router.get('/getAllUsers',async (req, res) => {
    const [result] = await pool.query("select * from test");
    res.json(result);

    // const users = await getAllUsers();
    // res.send(users);
});

// router.get('/getUser/:id',async (req, res) => {
//     // console.log(users);
//     const id = req.params.id;
//     const user = await getUser(id);
//     res.send(user);
// });

// router.post('/addUser',async (req, res) => {
//     // console.log(users);
//     const { username, password } = req.body;
//     const user = await addUser(username, password);
//     res.status(201).send(user);
// });

// router.post('/deleteUser',async (req, res) => {
//     // console.log(users);
//     const id = req.body;
//     const user = await deleteUser(id);
//     res.status(201).send(user);
// });



export default router;