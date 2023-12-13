import { Router } from "express";
import * as controller from "./controller.js"
import auth from './auth.js'
const router=Router();

/////common//////
router.route("/fetchUsername").post(auth,controller.fetchUsername);

/////adminnn//////
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/getStaff").get(controller.getstaffs);
router.route("/getStaffDetails/:id").get(controller.getstaffDetails);

/////stafff/////
router.route("/addStudent").post(controller.addStudent);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/getstudents").get(controller.getstudents);
router.route("/getStudentsDetails/:id").get(controller.getStudentsDetails);
router.route("/staffVerifyDetails/:phone").get(controller.staffVerifyDetails);
router.route("/staffResetPassword/:phone").patch(controller.staffResetPassword);



export default router;