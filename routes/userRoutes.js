const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookAvailabilityController
} = require("../controllers/userCtrl");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", AuthMiddleware, authController);
router.post("/apply-doctor", AuthMiddleware, applyDoctorController);
router.post(
  "/get-all-notifications",
  AuthMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notifications",
  AuthMiddleware,
  deleteAllNotificationController
);


router.get("/getAllDoctors", AuthMiddleware, getAllDoctorsController);

//appointment request
router.post('/book-appointment',AuthMiddleware,bookAppointmentController);
router.post('/booking-availability',AuthMiddleware,bookAvailabilityController);
module.exports = router;
