import admin_schema from "./admin.model.js";
import staff_schema from "./staff.model.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;

export async function addAdmin(req, res) {
  const { name, username, password } = req.body;
  bcrypt.hash(password, 10).then((hashedPwd) => {
    return res
      .status(201)
      .send(admin_schema.create({ name, username, password: hashedPwd }));
  });
}

export async function adminLogin(req, res) {
  const { username, password } = req.body;
  try {
    const usr = await admin_schema.findOne({ username });
    if (usr === null){
      return res
        .status(404)
        .send({ msg: "Username or password does not exist" });
    }
    const success = await bcrypt.compare(password, usr.password);
    if (!success){
      return res
        .status(401)
        .send({ msg: "Username or password does not match" });
    }
    const admintoken = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    res.status(201).send({ msg: "Successfully logged in", admintoken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}


export async function fetchUsername(req, res) {
    try {
        const {username}=req.user;
         res.status(200).send({ msg:username });
        res.end()
      } catch (error) {
        res.status(404).send(error);
      }
}




export async function addStaff(req, res) {
  try {
    const { ...StaffDetails } = req.body;
    const hashedPwd = await bcrypt.hash(StaffDetails.password, 10);
    const newStaff = await staff_schema.create({ ...StaffDetails, password: hashedPwd });
    res.status(201).json(newStaff);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export async function staffLogin(req, res) {
  const { username, password } = req.body;
  try {
    const usr = await staff_schema.findOne({ username });
    if (usr === null) {
      return res
        .status(404)
        .send({ msg: "Username or password does not exist" });
    }
    const success = await bcrypt.compare(password, usr.password);
    if (!success) {
      return res
        .status(401)
        .send({ msg: "Username or password does not match" });
    }
    const stafftoken = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    res.status(201).send({ msg: "Successfully logged in", stafftoken });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}


export async function getstaffs(req,res){
  let task=await staff_schema.find()
  res.status(200).send(task)
}

export async function getstaffDetails(req,res){
  const{id}=req.params;
  let task=await staff_schema.findOne({_id:id})
  res.status(200).send(task)
}