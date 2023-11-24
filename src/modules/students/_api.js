const express = require("express");
const path = require("path");
const router = express.Router();
const {
  getStudents,
  getStudent,
  patchStudent,
  postStudent,
  deleteStudent,
  uploadStudentAvatar,
} = require("./_controllers");
const { upload } = require("../../shared/multer");
const { paginateMiddleware } = require("../../middleware/pagination");
const isLoggedIn = require("../../shared/auth/is-logged-in");

// Middleware for common authorization
router.use("/", isLoggedIn, paginateMiddleware("students"));

// CRUD endpoints for students
router.route("/").get(getStudents).post(postStudent);

router.route("/:id").get(getStudent).patch(patchStudent).delete(deleteStudent);

// File upload route
router.post("/:id/fileUpload", upload.single("image"), uploadStudentAvatar);

// Serving static images
router.use(
  "/images",
  express.static(path.join(__dirname, "..", "..", "..", "public", "uploads"))
);

module.exports = router;
