import { Router } from "express";
import * as controller from "./controller.js"
import auth from './auth.js'
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/fetchUsername").post(auth,controller.fetchUsername);
router.route("/getStaff").get(controller.getstaffs);
router.route("/getStaffDetails/:id").get(controller.getstaffDetails);



export default router;