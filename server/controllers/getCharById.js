const axios = require('axios');

// const getCharById = async (res, id) => {
//     try {
//       const charById = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
//       const { name, gender, species, origin, image, status } = charById.data;
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin: origin.name,
//         image,
//         status,
//       };
//       res.status(200).json(character);
//     } catch (error) {
//       res.status(500).contentType('text/plain').send(error.message);
//     }
//   };

const getCharById = (res,id)=>{
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then((result)=>result.data)
  .then(({name, gender, origin, image, status, species})=>{ //o sino .then((data)=>{let character ={id:data.id,name:data.name...etc}})
    let character = {
      id,
      name,
      gender,
      origin,
      image,
      status,
      species
    }
    res.writeHead(200,{'Content-type':'application/json'}).end(JSON.stringify(character))
  })
  .catch((error)=>res.writeHead(500,{'Contet-type':'textt/plain'}).end(error.message))
}

module.exports = {
    getCharById
};