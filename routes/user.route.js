const {Usermodel}=require('../models/user.model')
const express=require('express')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


const userRouter=express.Router()

userRouter.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
    try{
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                console.log(err)
                res.send({'msg':'Signup unsuccessful'})
            }else{
                const new_user=new Usermodel({name,email,password:hash})
                await new_user.save()
                res.send({'status':201,'msg':"Signup successful"})
            }
        });

    }catch (err){
        console.log(err)
        res.send({'msg':'Signup unsuccessful'})
    }
})


userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await Usermodel.find({email})
    try{
        bcrypt.compare(password, user[0].password, function(err, result) {
            // result == true
            if(result){
                var token = jwt.sign({ user_id: user[0]._id }, 'airticket');
                res.send({'status':201,'msg':'Login successful','token':token})
            }else{
                console.log(err)
                res.send({'msg':'Login unsuccessful'})
            }
        });
    }catch (err){
        console.log(err)
        res.send({'msg':'Login unsuccessful'})
    }
})

module.exports={userRouter}