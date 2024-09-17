import courseModel from "../models/degree.model.js"
const createCourse=async(req,res)=>{
    try{
        const {degreeId,name,description,subjects,futurePaths,preparationTips}=req.body;
        if(!degreeId){
            return res.status(500).json({message:
                "Please Select Degreee"
            })
        }
        if(!name){
            return res.status(500).json({message:
                "Please Enter course name"
            })
        }
        const course=await courseModel.create({
            degreeId,name,description,subjects,futurePaths,preparationTips
        })
        if(!course){
            return res.status(500).json({message:"Course Not Created"})
        }
        res.status(200).json({data:course})
    }
    catch(error){
        res.status(500).json(error);

    }
}
export {createCourse}