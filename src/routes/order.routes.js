const { Router } = require("express");
const { authUser } = require("../middlewares/validate-user.middleware");
const { createOrder } = require("../controllers/order.controller");


const router = Router();

router.post( '/', authUser, createOrder );

module.exports = router;
