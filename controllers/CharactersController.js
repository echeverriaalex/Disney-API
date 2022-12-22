const DISNEY_CHARACTERS_API = "https://api.disneyapi.dev/characters";

const getCharacters = async(req,res, next) =>{
    try{
        let characters = await fetch(DISNEY_CHARACTERS_API);
        characters = await characters.json();
        console.log(`There are ${characters.data.length} characters`);
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
            imageUrl: character.imageUrl,
            url: character.url
        }));        
        res.status(200).send(characters);
    }
    catch(error){
        let message = `There is a problem, to get characters from Disney API or to process data`;
        console.log(message);
        res.status(404).send(message);
        return next(error);
    }
}

const getCharacterByName = async(req,res, next) =>{
    let name = req.params.name;
    try{
        let characters = await fetch(DISNEY_CHARACTERS_API);
        characters = await characters.json();

        character = characters.data.filter(character => character.name == name).map(character => ({
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
            imageUrl: character.imageUrl,
            url: character.url
        }));  
       
        res.status(200).send(character);
    }
    catch(error){
        let message = `There is a problem, to get characters from Disney API`;
        console.log(message);
        res.status(404).send(message);
        return next(error);
    }
}

const getCharacterById = async(req,res, next) =>{
    let id = req.params.id;
    try{
        let character = await fetch(DISNEY_CHARACTERS_API + "/" + id);
        character = await character.json();
        res.status(200).send(character);
    }
    catch(error){
        let message = `There is a problem, maybe do not exists a character with id ${id}`;
        console.log(message);
        res.status(404).send("<h1>" + message + "</h1");
        return next(error);
    }
}

const getBasicInfoCharacters = async(req, res, next) => {
    try{
        let characters = await fetch(DISNEY_CHARACTERS_API);
        characters = await characters.json()
        characters = characters.data.map(character => ({
            name: character.name,
            _id: character._id,
            imageUrl: character.imageUrl,
            url: character.url,
        }));
        //console.log(characters);
        res.status(200).send(characters);
    }
    catch(error){
        let message = `There is a problem, to get characters from Disney API`;
        console.log(message);
        res.status(404).send(message);
        return next(error);
    }
}

module.exports = {

    getCharacters,
    getCharacterByName,
    getCharacterById,
    getBasicInfoCharacters,
}