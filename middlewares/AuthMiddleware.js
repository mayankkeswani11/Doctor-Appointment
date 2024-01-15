const JWT=require('jsonwebtoken');
// import { message } from 'antd';

module.exports=async(req,res,next)=>{
    try {
        const token=req.headers['authorization'].split(" ")[1];
        JWT.verify(token,process.env.JWT_KEY,(err,decode)=>{
            if(err){
                res.status(200).send({
                    message:"authorization failed",
                    success:false
                })
            }
            else{
                req.body.userId=decode.id;
                next();
            }
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message:"authorization failed",
            success:false
        })
    }
}