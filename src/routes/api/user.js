const { Router } = require("express");
const { signUp, login } = require("../../controller/api/user");

const router = Router();

router.post("/register", signUp);

router.post("/login", login);

module.exports = router;
