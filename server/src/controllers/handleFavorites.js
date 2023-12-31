let myFavorites = [];

const postFav = (req,res)=>{
    const character = req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites)
};

const deleteFav = (req,res)=>{
    const { id } = req.params;    // por params viene siempre en string
    myFavorites = myFavorites.filter((fav)=>fav.id !== Number(id))
    return res.status(200).json(myFavorites)
};

module.exports={
    postFav,
    deleteFav
}