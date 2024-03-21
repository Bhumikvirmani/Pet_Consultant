const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let SECRET_KEY = "IAMBHUMIKVIRMANIFROMDELHIANDDOINGBCA"

const userSchema = new mongoose.Schema({
   
    
    username:{
        type: String,
        required:true
    },
    mobile:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    
    password:{
        type: String,
        required:true
    },
    cPassword:{
        type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type: String,
                required:true
            }

        }
    ]
});


userSchema.pre("save",async function(next){ 
    console.log("hi from inside");
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
        this.cPassword = await bcrypt.hash(this.cPassword,12);
    }
    next();
});

userSchema.methods.generateAuthToken= async function(){
    try {
        tokens = 0;
        let token = jwt.sign({_id:this._id},SECRET_KEY);
        this.tokens= this.tokens.concat({token:token});    
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
};
const User= mongoose.model('USER',userSchema);

module.exports= User;