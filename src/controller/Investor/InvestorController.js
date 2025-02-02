const Investor = require("../../dbConfig/models/Investor");
const User = require("../../dbConfig/models/User");

const InvestorController = {
  async updateInvestor(req, res) {
    try {
      const { user: userParams, investor: investorParams } = req.body;
      const id = req.user?.id;

      // find if user exists with the given id
      const user = await User.findById(id);
      if (!user) {
        return res.errorResponse(true, "User not found");
      }

      // update user with the given id
      const updatedUser = await User.findByIdAndUpdate(id, userParams, { new: true });

      // find if investor exists with the given id
      const investor = await Investor.findOne({ userId: id });
      if (!investor) {
        return res.errorResponse(true, "Investor not found");
      }

      // update investor with the given id
      const updatedInvestor = await Investor.findByIdAndUpdate(investor.id, investorParams, { new: true });

      return res.successResponse(true, { user: updatedUser, investor: updatedInvestor }, "Investor updated successfully");
    } catch (error) {
      return res.errorResponse(true, error.message);
    }
  },

  async getInvestor(req, res) {
    try {
      const id = req.user?.id;

      // find if user exists with the given id
      const user = await User.findById(id);
      if (!user) {
        return res.errorResponse(true, "User not found");
      }

      // find if investor exists with the given id
      const investor = await Investor.findOne({ userId: id });
      if (!investor) {
        return res.errorResponse(true, "Investor not found");
      }

      return res.successResponse(true, { user, investor }, "Investor fetched successfully");
    } catch (error) {
      return res.errorResponse(true, error.message);
    }
  },

};

module.exports = InvestorController;
