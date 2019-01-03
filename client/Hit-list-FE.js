//let songRank = ['Times like these', 'Learn to fly', 'Run', 'Everlong'];

console.log('Helllllllo world');

const xhr = new XMLHttpRequest();
const url = 'http://localhost:3000/';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  } 
};




let rankChoice = document.getElementById('rankChoice');
let songChoice = document.getElementById('songChoice');
let form = document.getElementById('rankQuery');

let rankResult;

form.addEventListener('submit', function(event){
    if(!rankChoice.value || isNaN(rankChoice.value)){
        alert('Please enter a valid number');
    }else {
        console.log(rankChoice.value);        
        rankResult = parseFloat(rankChoice.value);
        xhr.open('POST', url);
        xhr.send(rankResult);
        //songChoice.innerHTML = songRank[rankResult-1];        
        event.preventDefault();               
    }    
});

console.log(rankResult);


