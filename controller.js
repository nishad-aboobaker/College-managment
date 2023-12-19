import admin_schema from "./admin.model.js";
import staff_schema from "./staff.model.js";
import students_schema from "./students.model.js"
import marks_schema from "./marks.model.js"
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

export async function addStudent(req, res) {
  try {
    const { ...StudentsDetails } = req.body;
    const newStaff = await students_schema.create({ ...StudentsDetails});
    res.status(201).json(newStaff);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export async function getstudents(req,res){
  let task=await students_schema.find()
  res.status(200).send(task)
} 

export async function getStudentsDetails(req,res){
  const{id}=req.params;
  let task=await students_schema.findOne({_id:id})
  res.status(200).send(task)
}


export async function staffVerifyDetails(req, res) {
  try {
    const { phone } = req.params;
    if (!phone) {
      return res.status(404).send({ msg: "Phone number not found" });
    }
    const data = await staff_schema.findOne({ phone: phone });
    if (!data) {
      return res.status(404).send({ msg: "Data not found for the provided phone number" });
    }
    res.status(200).send(data);
  } catch (error) {
    console.error("Error in staffVerifyDetails:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}


export async function staffResetPassword(req, res) {
  const { phone } = req.params;
  const password = req.body;
  const hashedPwd = await bcrypt.hash(password.password, 10);
  await staff_schema.updateOne({ phone:phone }, { $set:{password:hashedPwd} });
  res.status(201).send("updated");
}

export function deleteStaff(req, res) {
  const { id } = req.params;
  const data = staff_schema.deleteOne({ _id: id });
  data
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}

export function deletestudent(req, res) {
  const { id } = req.params;
  const data = students_schema.deleteOne({ _id: id });
  data
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}


export async function updateStaff(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const { ...details } = req.body;
    try {
      const updatedStaff = await staff_schema.updateOne({ _id: id }, { $set: { ...details } });
      res.status(201).json({ message: 'Staff member updated successfully' });
    } catch (updateError) {
      console.error('Error updating staff member:', updateError.message);
      res.status(500).json({ error: 'Internal server error during update' });
    }
  } catch (error) {
    console.error('An error occurred in updateStaff:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const { ...details } = req.body;
    try {
      const updatedStaff = await students_schema.updateOne({ _id: id }, { $set: { ...details } });
      res.status(201).json({ message: 'Student updated successfully' });
    } catch (updateError) {
      console.error('Error updating Student:', updateError.message);
      res.status(500).json({ error: 'Internal server error during update' });
    }
  } catch (error) {
    console.error('An error occurred in updateStaff:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function uploadMark(req, res) {
  try {
    const {...mark} = req.body;
    const result = await marks_schema.create({...mark});
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export async function getStudent(req, res) {
  const { phone } = req.params;
  let task = await students_schema.findOne({ phone: phone });
  res.status(200).send(task);
}

export async function getMarks(req, res) {
  try {
    const { id } = req.params;
    let task = await marks_schema.findOne({ StudentId: id });
    if (!task) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getBasicDetails(req, res) {
  try {
    const { id } = req.params;
    let task = await students_schema.findOne({ _id: id });
    if (!task) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching marks:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


