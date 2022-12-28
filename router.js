const { render } = require('ejs');
const express = require('express');
const app = express();
const router = express.Router();

const characterController = require('./controllers/CharactersController');

router.get('/home', (req, res, next)=>{
    res.send(`Welcome to Disney Api`);
})

router.get('/developer', (req, res, next)=>{
    res.json({
        name : "Alex",
        secondName: "Nahuel",
        lastname: "Echeverria",
        rol: "Backend",
        skills: "NodeJS, JS, PHP, HTML5, Java, MySQL, PostgreSQL"
    });
})

router.get('/characters', characterController.getCharacters);



/* 
// no se puede hacer porque getcharacters lanza una respuesta
router.get('/characters', (req, res, next)=>{
    
    data = characterController.getCharacters();
    console.log(data);
    res.send('showed')

});
*/

router.get('/people', async(req, res, next)=>{
    const data =  [
                {name: "alex", lastname: "echeverria"},
                {name: "gustavo", lastname: "echeverria"},
                {name: "maira", lastname: "echeverria"},
                {name: "laura", lastname: "lencinas"}
            ];

    console.log(data);
    res.render('people.ejs', {people: data});

});

router.get('/charactersrender', async(req, res, next)=>{

    let list = await characterController.getJSONCharacters();
    console.log(list[0]);
    res.render('characters.ejs', {characters: list});
});

router.get('/character/:name', characterController.getCharacterByName);
router.get('/character/:id', characterController.getCharacterById);
router.get('/charactersbasicinfo', characterController.getBasicInfoCharacters);

router.use(express.static('public'));

module.exports = router;