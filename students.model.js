import mongoose from "mongoose";
const students_schema=new mongoose.Schema({
    name:{type:String},
    dob:{type:String},
    email:{type:String},
    semester:{type:Number},
    admnno:{type:Number},
    phone:{type:Number},
    course:{type:String},
    address:{type:String},
    tutor:{type:String},
    photo:{type:String}
})

export default mongoose.model.Students||mongoose.model("Students",students_schema)