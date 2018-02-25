const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users_controller");

router.post("/user", UserController.createUser);

module.exports = router;
