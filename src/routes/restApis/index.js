const express = require("express");
const authRoutes = require("./Auth/authRoutes");


const { jsonResponseFormat } = require("../../middleware/jsonResponseFormat");

const router = express.Router();

// Router will use response formate
router.use(jsonResponseFormat);

// Auth Routes
router.use("/auth/", authRoutes);
module.exports = router;
