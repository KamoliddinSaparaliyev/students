const express = require("express");
const {
  getUsers,
  getUser,
  patchUser,
  postUser,
  deleteUser,
  loginUser,
} = require("./_controllers");

const isLoggedIn = require("../../shared/auth/is-logged-in");
const isAdmin = require("../../shared/auth/is-Admin");

const router = express.Router();

router.get("/", isLoggedIn, isAdmin, getUsers);
router.post("/", isLoggedIn, isAdmin, postUser);
router.get("/:id", isLoggedIn, isAdmin, getUser);
router.patch("/:id", isLoggedIn, isAdmin, patchUser);
router.delete("/:id", isLoggedIn, isAdmin, deleteUser);
router.post("/login", loginUser);

module.exports = router;
