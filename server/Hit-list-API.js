var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let songRank = ['Times like these', 'Learn to fly', 'Run', 'Everlong'];
/*let someObj = {
    songRank: ['Times like these', 'Learn to fly', 'Run', 'Everlong'],
    length: 4,
}*/

console.log('Helllllllo node');

app.get('/', function (req, res) {
    let request = req.body;
    console.log('got a GET request');
    //console.log(request.something);
    res.send(request);
});

app.post('/', function (req, res) {
    let request = req.body;
    console.log('Got a POST request');
    console.log(request);
    console.log(songRank[request.something]);
    res.send(songRank[request.something]);
});


app.listen(3000, function () {
    console.log("Hit list API listening on port 3000");
});

/*
form.addEventListener('submit', function(event){
    if(!rankChoice.value || isNaN(rankChoice.value)){
        alert('Please enter a valid number');
    }else {
        console.log(rankChoice.value);
        rankResult = parseFloat(rankChoice.value);
        songChoice.innerHTML = songRank[rankResult-1];
        event.preventDefault();               
    }    
});

//songChoice.innerHTML = songRank[rankResult];
console.log(rankResult);
*/

