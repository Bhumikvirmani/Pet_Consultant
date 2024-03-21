// const dotenv=require("dotenv");
const mongoose= require('mongoose');
const express= require('express');
const cors = require('cors')
const app = express();

app.use(cors());


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

// dotenv.config({path:'./config.env'});

const DB= `mongodb+srv://PetDoc:PetDoc100@cluster0.3ixtt9u.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0`
// `mongodb+srv://Pet_care:Pet_care100@cluster0.cnrenpk.mongodb.net/users?retryWrites=true&w=majority`;
// "database = mongodb+srv://learnmern:learnmern100@cluster0.0yunywj.mongodb.net/learnmern?retryWrites=true&w=majority";
// process.env.database;
// 'mongodb+srv://bhumikvirmani:bhumikvirmani@100@cluster0.7s46hxk.mongodb.net/testme?retryWrites=true&w=majority'

const User= require('./Model/userSchema');
app.use(express.json());
app.use(require('./Router/auth.js'))
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useNewUrlParser:false,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log("no connection"));

const midleware = (req,res,next)=>{
    console.log("middleware is here");
    next();
}
app.get('/',(req,res)=>{
    res.send("hello world from the server");
});

app.get('/about',midleware,(req,res)=>{
    console.log("this is about");
    res.send("this is about");
});
app.get('/signin',(req,res)=>{
    res.send("this is signin");
});
app.get('/signup',(req,res)=>{
    res.send("this is signup");
});
app.get('/contact',(req,res)=>{
    res.cookie("Test",'example');
    res.send("this is contact");
});
const PORT=2000;
app.listen(PORT,()=>{
    console.log("server side is running");
}); 
