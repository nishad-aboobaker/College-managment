import admin_schema from './admin.model.js'
import staff_schema from './staff.model.js'
import bcrypt from "bcrypt"

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
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error); 
}
}


export async function addStaff(req,res){
    const {name,username,password}=req.body
    res.status(201).send(staff_schema.create({name,username,password}));
}
