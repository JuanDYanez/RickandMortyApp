let myFavorites = []

exports.postFav = (req, res) => {

  myFavorites.push(req.body);
  
  res.status(200).json(myFavorites)
}

exports.deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((char) => char.id !== Number(id));

  res.status(200).json(myFavorites);
};

