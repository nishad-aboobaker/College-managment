import { Router } from "express";
import * as controller from "./controller.js"
import auth from './auth.js'
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/adminhome").post(auth,controller.adminHome);



export default router;