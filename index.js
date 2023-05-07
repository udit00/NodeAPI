import express from 'express';
import bodyParser from 'body-parser';
import twitter from './Routes/Twitter/twitter.js';
import todo from './Routes/Todo/todo.js';
import cors from 'cors';

const app=express();
const PORT=5000;

app.use(bodyParser.json({ type: 'application/json' }));


app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}))

var urlencodedParser = bodyParser.urlencoded({ extended: true })
// app.use('/userController', userController);

// app.use('/loginController', loginController);

app.use('/twitter', urlencodedParser, twitter);

app.use('/todo', urlencodedParser, todo);

app.get('/', (req, res) => res.send('Hello from HomePage.'));

app.listen(PORT, ()=> console.log(`Server is running on =>
 http://localhost:${PORT}`));