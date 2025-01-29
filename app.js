// importing Modules
const express = require("express");
const http = require("http");
const cors = require("cors");
const restApis = require("./src/routes");
const connectDB = require("./src/dbConfig/dbConnection");

// App Configuration
const app = express();
const server = http.createServer(app);

// Database Connection
connectDB()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Connection Error", err);
  });

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static serves
app.use("/static/files", express.static("./upload"));

// Sync Database

// API Routes
app.use("/api/", restApis);

// api status route
app.get("/status", (req, res) => {
  res.status(200).json({
    status: "Healthy",
    API: "BullsEye APIS",
    version: 1.0,
    developer: "Muhammad Afaq Khan",
  });
});

// server.listen(PORT, () => console.log(`CRM Is running on ${ENV.BASE_URL}`));
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
