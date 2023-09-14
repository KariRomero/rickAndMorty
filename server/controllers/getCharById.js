const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = (req,res)=>{
  const { id }= req.params;

  axios.get(`${URL}/${id}`)
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
    return res.status(200).json(character)
  })
  .catch((error)=>res.status(500).send(error.message))
}

module.exports = {
    getCharById
};