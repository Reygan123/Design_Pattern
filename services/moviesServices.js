const moviesRepository = require("../repositories/moviesRepository.js");

class moviesServices {
  static create = async (params) => {
    try {
      const { title, genres, year } = params;
      const payload = {
        title,
        genres,
        year,
      };

      const data = await moviesRepository.create(payload);
      return data;
    } catch (err) {
      throw err;
    }
  };
  static findAll = async () => {
    try {
      const data = await moviesRepository.findAll();
      return data;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (params) => {
    try {
      const { id } = params;

      const data = await moviesRepository.findOne(id);
      return data;
    } catch (err) {
      throw err;
    }
  };

  static uploadImage = async (params) => {
    try {
      const { file, id } = params;

      const image_url = `http://localhost:3000/uploads/${file.filename}`;
      const payload = {
        image_url,
      };
      const data = await moviesRepository.uploadImage(id, payload);
      return data;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (params) => {
    try {
      const { id } = params;
      await moviesRepository.destroy(id);
    } catch (err) {
      throw err;
    }
  };
}

module.exports = moviesServices;
