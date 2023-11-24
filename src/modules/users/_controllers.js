const httpValidator = require("../../shared/validator");
const { showUser } = require("./show-user");
const { listUsers } = require("./list-users");
const { editUser } = require("./edit-user");
const { removeUser } = require("./remove-user");
const { addUser } = require("./add-user");
const { login } = require("./login-user");
const {
  showUserSchema,
  updateUserSchema,
  removeUserSchema,
  createUserSchema,
  loginUserSchema,
} = require("./_schemas");

const getUsers = async (req, res, next) => {
  try {
    const result = await listUsers();

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser({ id: req.params.id });

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, updateUserSchema);

    const result = await editUser(req.query);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, removeUserSchema);

    const result = await removeUser(req.query);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, createUserSchema);

    const result = await addUser(req.query);

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginUserSchema);

    const result = await login(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
  patchUser,
  postUser,
  deleteUser,
  loginUser,
};
