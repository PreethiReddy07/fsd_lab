const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require("../models/User")

exports.register= async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const exitsUser= await User.findOne({email})
        if(exitsUser)
            return res.status(201).json({msg:"user alredy exist"})
        const h=await bycrypt.hash(password,10);
        const user=await User.create({name,email,password:h})
        res.status(200).json({msg:"User creted"})

    }catch(err){
        res.status(404).json({msg:"err"})
    }
};

exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const u=await User.findOne({email});
        if(!u){
            return res.status(404).json({msg:"user not exist"})
        }
        const m=await bycrypt.compare(password,u.password)
        if(!m){
            return res.status(404).json({msg:"invalid credentials"})
        }
        const token=jwt.sign({id:u._id},process.env.JWT_SECRET)
        res.json({token})
    }catch(err){
        res.status(404).json({msg:"err"})
    }
};