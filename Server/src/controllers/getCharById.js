const URL = "https://rickandmortyapi.com/api/character/:id";
const axios = require('axios')

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);

    if (data) {
      let character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin ,
        image: data.image,
        status: data.status,
      };

      res.status(200).json(character)
    } else {
      res.status(404).json({message: 'Not found'})
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports = {
  getCharById,
}

// exports.getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then(({ name, gender, species, origin, image, status }) => {
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status
//       }
//       return res
//         .writeHead(200, { 'Content-type': "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch(reason => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(reason.message);}
//     )
// }