const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/AuthMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController
} = require("../controllers/doctorCtrl");
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
router.post("/updateProfile", authMiddleware, updateProfileController);
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);
module.exports = router;
