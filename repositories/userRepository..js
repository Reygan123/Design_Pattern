const { User } = require("../models");

class userRepository {
  static create = async (params) => {
    try {
      const data = await User.create(params, {
        returning: true,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
  static findAll = async () => {
    try {
      const data = await User.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const data = await User.findOne({
        where: {
          id,
        },
      });

      return data;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const data = await User.findOne({
        where: {
          id,
        },
      });

      if (!data) {
        throw { name: "ErrorNotFound" };
      }
      await data.destroy();
    } catch (err) {
      throw err;
    }
  };
}

module.exports = userRepository;
