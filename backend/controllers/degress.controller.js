import Degree from "../models/degree.model.js"
const createDegree=async(req,res)=>{
    try{
        const {name}=req.body;
        if(!name){
           return res.status(400).json({message:"All Fields are Required"})
        }
        const degree=await Degree.create({name})
        res.status(200).json({
            data:degree
        })
    }
    catch(error){
        res.status(500).json(error);

    }
}
export {createDegree}