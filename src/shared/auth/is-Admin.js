const express = require("express");
const { ForbiddenError } = require("../error");

const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role === "USER") throw new ForbiddenError("Ruxsat yo'q");

    next();
  } catch (error) {
    next(error);
  }
};
module.exports = isAdmin;
