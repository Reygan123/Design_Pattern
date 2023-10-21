const userRepository = require("../repositories/userRepository..js");

class userServices {
  static create = async (params) => {
    try {
      const { email, gender, password, role } = params;
      const payload = {
        email,
        gender,
        password,
        role,
      };

      const data = await userRepository.create(payload);
      return data;
    } catch (err) {
      throw err;
    }
  };
  static findAll = async () => {
    try {
      const data = await userRepository.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const data = await userRepository.findOne(id);
      return data;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (params) => {
    try {
      const { id } = params;
      await userRepository.destroy(id);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = userServices;
