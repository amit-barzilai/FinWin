//let songRank = ['Times like these', 'Learn to fly', 'Run', 'Everlong'];

console.log('Helllllllo world');

//const xhr = new XMLHttpRequest();
const url = 'https://reqres.in/api/unknown/2';
/*let ranking;
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
    //ranking = xhr.response;
  } 
};*/


let rankChoice = document.getElementById('rankChoice');
let songChoice = document.getElementById('songChoice');
let form = document.getElementById('rankQuery');

let numRankChoice;

form.addEventListener('submit', function(event){
    if(!rankChoice.value || isNaN(rankChoice.value)){
        alert('Please enter a valid number');
    }else {
        console.log(rankChoice.value);        
        numRankChoice = parseFloat(rankChoice.value);
        fetch (url).then(response => {
            if (response.ok){
                return response.json();
            }
            throw new Error('Request failed');
        }, networkError => console.log(networkError.message)).then(jsonResponse => {
           console.log(jsonResponse); 
        });
        //xhr.open('GET', url);
        //xhr.send();
        //songChoice.innerHTML = songRank[rankResult-1];        
        event.preventDefault();    
        //console.log(ranking.name);
    }    
});

//console.log(rankResult);


