const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

// Settings
app.set('developer', 'Alex Nahuel Echeverria')
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(port, ()=>{

    console.log(`Developing Disney API on port ${port}`);
    //console.log('developed by' + app.get(developer));
})