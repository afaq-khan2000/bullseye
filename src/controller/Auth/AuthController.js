const User = require("../../dbConfig/models/User");
const { hashPassword, comparePassword } = require("../../Helper/hashPasswordHelper");
const { generateToken } = require("../../Helper/jwtHelper");

const AuthController = {
  async signup(req, res) {
    try {
      const { username, email, password, role } = req.body;

      const userExist = await User.findOne({
        email,
      });

      if (userExist) {
        return res.errorResponse(true, "User already exist");
      }

      let hashedPassword = await hashPassword(password);

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });

      // create token
      let tokenUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      const token = generateToken(tokenUser);

      return res.successResponse(true, { user, token }, "User created successfully");
    } catch (error) {
      console.log("signup: ", error);
      return res.errorResponse(true, error.message);
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        email,
      });

      if (!user) {
        return res.errorResponse(true, "User not found");
      }

      const passwordMatch = await comparePassword(password, user.password);

      if (!passwordMatch) {
        return res.errorResponse(true, "Invalid password");
      }

      // create token
      let tokenUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      };
      const token = generateToken(tokenUser);

      return res.successResponse(true, { user, token }, "Login successful");
    } catch (error) {
      console.log("login: ", error);
      return res.errorResponse(true, error.message);
    }
  },
};

module.exports = AuthController;
