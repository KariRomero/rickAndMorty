const axios = require('axios');

const getCharById = async (res, id) => {
    try {
      const charById = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      const { name, gender, species, origin, image, status } = charById.data;
      const character = {
        id: id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };
      res.status(200).json(character);
    } catch (error) {
      res.status(500).contentType('text/plain').send(error.message);
    }
  };

module.exports = {
    getCharById
};