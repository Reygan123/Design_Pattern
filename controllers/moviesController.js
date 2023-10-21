const moviesService = require("../services/moviesServices.js");

class moviesController {
  static create = async (req, res, next) => {
    try {
      const data = await moviesService.create(req.body);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findAll = async (req, res, next) => {
    try {
      const data = await moviesService.findAll();

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findOne = async (req, res, next) => {
    try {
      const data = await moviesService.findOne(req.params);

      if (!data) {
        throw { name: "ErrorNotFound" };
      }

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static uploadImage = async (req, res, next) => {
    try {
      const params = {
        file: req.file,
        id: req.params.id,
      };

      const data = await moviesService.uploadImage(params);

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      await moviesService.destroy(req.params);
      res.status(200).json({ message: "Delete successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = moviesController;
