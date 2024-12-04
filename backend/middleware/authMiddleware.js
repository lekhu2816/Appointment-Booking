import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
const key=process.env.TOKEN_SECRETE_KEY;
const authMiddleware=(req,res,next)=>{
const token=req.cookies.token;
try {
    if(!token){
        res.status(401).json({
         success:false,
         message:"Authentication required"
        })
    }
    const userId=jsonwebtoken.verify(token,key);
    req.body=userId;
    next()
} catch (error) {
    res.status(401).json({
        success:false,
        message:"Invalid token"
    })
}
}

export default authMiddleware