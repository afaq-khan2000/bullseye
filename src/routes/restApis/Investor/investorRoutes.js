const express = require("express");
const { InvestorController } = require("../../../controller");
const { authenticateUser } = require("../../../middleware/authenticateUser");
const router = express.Router();

// router auth routes
router.use(authenticateUser());

router.get("/", InvestorController.getInvestor);
router.put("/", InvestorController.updateInvestor);

module.exports = router;
