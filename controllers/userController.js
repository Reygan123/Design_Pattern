const userService = require("../services/userServices.js");

class userController {
  static create = async (req, res, next) => {
    try {
      const data = await userService.create(req.body);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findAll = async (req, res, next) => {
    try {
      const data = await userService.findAll();

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const data = await userService.findOne(req.params);

      if (!data) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      await userService.destroy(req.params);
      res.status(200).json({ message: "Delete successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = userController;
