const express = require("express");
const path = require("path");
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
const router = express.Router();

router.use("/", paginateMiddleware("students"));
router.route("/").get(getStudents).post(postStudent);
router.route("/:id").get(getStudent).patch(patchStudent).delete(deleteStudent);
router.post("/:id/fileUpload", upload.single("image"), uploadStudentAvatar);
router.use(
  "/images",
  express.static(path.join(__dirname, "..", "..", "..", "public", "uploads"))
);

module.exports = router;
