const toTranslate = [
    "Patate", 
    "Chat", 
    "Chien"];

const answers = ["Potato", "Cat", "Dog"];

var randomNumber = randomQuestion;

function myQuestion(){
    const randomQuestion = toTranslate[Math.floor(Math.random() * toTranslate.length)];
    document.getElementById("theQuestion").textContent = randomQuestion;
    document.getElementById("theAnswer").textContent = "";
}

function myAnswer(){
    var answerString = document.getElementById("theQuestion").textContent;
    var answerIndex = toTranslate.indexOf(answerString);
    var answerWord = answers[answerIndex];
    document.getElementById("theAnswer").textContent = answerWord;
}