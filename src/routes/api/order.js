const { Router } = require("express");
const { stripePayment } = require("../../controller/api/order");
const { authMiddleware } = require("../../util/auth");
const router = Router();

router.post("/payment", authMiddleware, stripePayment);

module.exports = router;
