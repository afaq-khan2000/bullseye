const User = require("../dbConfig/models/User");
const { verifyToken } = require("../Helper/jwtHelper");

exports.authenticateUser = () => {
  return async function (req, res, next) {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      if (token) {
        const decoded = verifyToken(token);
        if (decoded) {
          const user = await User.findById(decoded.id);
          if (user) {
            req.user = user;
            next();
          } else {
            return res.errorResponse(true, "User not found", 401);
          }
        }
      }
    } catch (err) {
      console.log("authenticateUsererr: ", err);
      return res.errorResponse(true, "Invalid Request!", 401);
    }
  };
};
