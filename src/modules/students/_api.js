const express = require("express");
const {
  getstudents,
  getStudent,
  patchStudent,
  postStudent,
  deleteStudent,
} = require("./_controllers");

const router = express.Router();

router.get("/students", getstudents);
router.get("/students/:id", getStudent);
router.patch("/students/:id", patchStudent);
router.post("/students", postStudent);
router.delete("/students:id", deleteStudent);

module.exports = router;
