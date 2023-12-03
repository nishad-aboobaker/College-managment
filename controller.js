import admin_schema from './admin.model.js'
import staff_schema from './staff.model.js'
import bcrypt from "bcrypt"
import pkg from "jsonwebtoken";
const { sign } = pkg;

export async function addAdmin(req,res){
    const {name,username,password}=req.body

    bcrypt
    .hash(password, 10)
    .then((hashedPwd) => {
      return res.status(201).send( admin_schema.create({ name, username, password: hashedPwd }));
    })

}



export async function adminLogin(req, res) {
    try {
     const { username, password } = req.body;
     const usr = await admin_schema.findOne({ username })
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     if (success !== true) return res.status(404).send("username or password doesnot match");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "1h" })
     res.status(201).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}


export async function addStaff(req,res){
    const {name,username,password}=req.body
    res.status(201).send(staff_schema.create({name,username,password}));
}
