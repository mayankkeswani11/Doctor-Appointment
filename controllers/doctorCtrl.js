const doctorModel=require("../models/doctorModel")
const getDoctorInfoController=async(req,res)=>{
    try {
        const doctor=await doctorModel.findOne({userId:req.body.userId})
        res.status(200).send({
            message:"data added successfully",
            success:true,
            data:doctor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"error while fetching doctor data",
            success:false,
            error
        })
    }
}
const updateProfileController=async(req,res)=>{
try {
    const doctor=await doctorModel.findOneAndUpdate({userId:req.body.userId},req.body);
    res.status(201).send({
        message:"updated profile successfully ",
        success:true,
        data:doctor
    })
    
} catch (error) {
    console.log(error)
    res.status(500).send({
        message:"doctor profile update issue",
        success:false,
        error
    })
}
}
const getDoctorByIdController=async(req,res)=>{
    try {
        const doctor=await doctorModel.findOne({_id:req.body.doctorId})
        res.status(200).send({
            message:"successfully got data of doctor",
            success:true,
            data:doctor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"error in getting data of doctor",
            success:false,
            error
        })
    }
}

module.exports={getDoctorInfoController,updateProfileController,getDoctorByIdController};