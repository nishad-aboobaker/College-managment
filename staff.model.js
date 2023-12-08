import mongoose from "mongoose";
const staff_schema=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    email:{type:String},
    salary:{type:Number},
    experience:{type:Number},
    empid:{type:Number},
    password:{type:String},
    phone:{type:Number},
    designation:{type:String},
    address:{type:String}
})

export default mongoose.model.staffs||mongoose.model("staff",staff_schema)