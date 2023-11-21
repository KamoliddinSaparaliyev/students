const express = require("express");
const {
  getstudents,
  getStudent,
  patchStudent,
  postStudent,
  deleteStudent,
  uploadStudentAvatar,
} = require("./_controllers");
const { upload } = require("../../shared/multer");

const router = express.Router();

router.route("/").get(getstudents).post(postStudent);
router.route("/:id").get(getStudent).patch(patchStudent).delete(deleteStudent);
router.post("/upload", upload.single("avatar"), uploadStudentAvatar);

module.exports = router;
