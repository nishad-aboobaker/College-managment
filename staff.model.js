import mongoose from "mongoose";
const staff_schema=new mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
})

export default mongoose.model.staffs||mongoose.model("staff",staff_schema)