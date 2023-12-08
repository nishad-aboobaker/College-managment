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
    const token = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    res.status(201).send({ msg: "Successfully logged in", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}

export async function addStaff(req, res) {
  const { ...StaffDetails } = req.body;
  res.status(201).send(staff_schema.create({ ...StaffDetails }));
}

export async function adminHome(req, res) {
    try {
        const {username}=req.user;
         res.status(200).send({ msg:username });
        res.end()
      } catch (error) {
        res.status(404).send(error);
      }
}
