const DISNEY_CHARACTERS_API = "https://api.disneyapi.dev/characters";

const getCharacters = async(req,res) =>{

    let characters = await fetch(DISNEY_CHARACTERS_API);
    characters = await characters.json()
    //console.log("hola " + characters.data[0].name);
    characters = characters.data.map(character => ({
        //console.log(character.name);
        name: character.name,
        _id: character._id,
        films: character.films,
        shortFilms: character.shortFilms,
        tvShows: character.tvShows,
        videoGames: character.videoGames,
        parkAttractions: character.parkAttractions,
        allies: character.allies,
        enemies: character.enemies,
        sourceUrl: character.sourceUrl,
        imageUrl: character.imageUrl,
        createdAt: character.createdAt,
        updatedAt: character.updatedAt,
        url: character.url,
    }));
    //console.log(characters);
    res.status(200).send(characters);
}

//getCharacters();

module.exports = {

    getCharacters
}