const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





const DB=`mongodb+srv://PetDoc:PetDoc100@cluster0.3ixtt9u.mongodb.net/patient?retryWrites=true&w=majority&appName=Cluster0`
// `mongodb+srv://Pet_care:Pet_care100@cluster0.cnrenpk.mongodb.net/users?retryWrites=true&w=majority`;
const User = require('../Model/userSchema');
router.get('/',(req,res)=>{
    res.send('hello from the router server .....');
});

    router.post('/details',async(req,res)=>{
        console.log("IN details")
        const{ username,mobile , email,password,cPassword}=req.body;
        if(!username || !mobile || !email || !password || !cPassword ){
            console.log(`ifin registerd successfully`);
                return res.status('invalid').json({error: "plz enter all the data"});
        }
        try {
            const userExist=await User.findOne({email:email});
            if(userExist){
                console.log(`exisit registerd successfully`);
                return res.status('invalid').json({error:"Email already Exist"});
            }
            const user = new User({username,mobile,email,password, cPassword});
            const userRegister = await user.save();
            console.log(`${user} user registerd successfully`);
            console.log(userRegister)
            res.status(201).json({message:"user registered successfully"});
        } catch (error) {
            console.log(error);
        }
    });
        

    router.post('/login',async(req,res)=>{
        res.send("this is login from server")
        try{
            let token;
            const{email,password}=req.body;
            if(!email || !password){
                return res.status('invalid').json({message: "plz Filled the data"});
            }
            const userLogin = await User.findOne({email:email});
           
            console.log(userLogin);
            if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);

                token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie("jwttoken",token,{
                    expires: new Date(Date.now()+  259200000),
                    httpOnly:true
                });
                if(!isMatch){
                    res.send({message:"invalid  credential"})
                }else{
                    res.send({message:"login successfully"});
                }
            }else{
                res.status(401).json({error:"invalid credential"});
            }
        }catch(err){
            console.log(err);
        }
        // console.log(req.body);
        // res.json({message: "good"});
    });
module.exports = router;

//     const{ name , mobile , address,email,username,password,cpassword}=req.body;
//     if(!name || !mobile || !address|| !email || !username|| !password ||!cpassword){
//         return res.status(422).json({error: "plz enter all the data"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(112).json({error:"Email already exist"});
//         }
//         const users= new User({name , mobile , address,email,username,password,cpassword});
//         users.save().then(()=>{
//             res.status(201).json({message:"user registration Successfully"});
//         }).catch((error)=> res.status(500).json({error:"Failed to register"}));

//     }).catch(err=>{console.log(err);});
    
    // console.log(req.body);
    // res.json({message: req.body});
    // res.send("mera register page");



