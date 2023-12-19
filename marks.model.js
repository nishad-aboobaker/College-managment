import mongoose from "mongoose";
const marks_schema=new mongoose.Schema({
    StudentId:{type:String},
    internal:{Discreet:{type:String},
             Graphics:{type:String},
             Android:{type:String}},
    external:{Discreet:{type:String},
            Graphics:{type:String},
            Android:{type:String}},
    attendance:{type:String}
    
})

export default mongoose.model.marks||mongoose.model("mark",marks_schema)