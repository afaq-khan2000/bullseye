const express = require("express");
const authRoutes = require("./Auth/authRoutes");
const investorRoutes = require("./Investor/investorRoutes");


const { jsonResponseFormat } = require("../../middleware/jsonResponseFormat");

const router = express.Router();

// Router will use response formate
router.use(jsonResponseFormat);

// Auth Routes
router.use("/auth/", authRoutes);
// investor Routes
router.use("/investor/", investorRoutes);
module.exports = router;
