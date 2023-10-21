const { Movies } = require("../models");

class moviesRepository {
  static create = async (params) => {
    try {
      const data = await Movies.create(params, {
        returning: true,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
  static findAll = async () => {
    try {
      const data = await Movies.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const data = await Movies.findOne({
        where: {
          id,
        },
      });

      return data;
    } catch (err) {
      throw err;
    }
  };

  static uploadImage = async (id, payload) => {
    try {
      const foundMovies = await Movies.findOne({
        where: {
          id,
        },
      });

      if (!foundMovies) {
        throw { name: "ErrorNotFound" };
      }

      await foundMovies.update(payload);
      return foundMovies;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const data = await Movies.findOne({
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

module.exports = moviesRepository;
