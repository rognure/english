const toTranslate = [
    "Patate", 
    "Chat", 
    "Chien",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."];

const answers = ["Potato", "Cat", "Dog", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy asd f a sdfa sdfa sdf a sdf."];

var randomNumber = randomQuestion;

function myQuestion(){
    const randomQuestion = toTranslate[Math.floor(Math.random() * toTranslate.length)];
    document.getElementById("theQuestion").textContent = randomQuestion;
    document.getElementById("myTranslation").value = "";
    document.getElementById("theAnswer").textContent = "";
}

function myAnswer(){
    var answerString = document.getElementById("theQuestion").textContent;
    var answerIndex = toTranslate.indexOf(answerString);
    var answerWord = answers[answerIndex];
    document.getElementById("theAnswer").textContent = answerWord;
}

function reset(){
    document.getElementById("myTranslation").textContent = "";
}

function autoGrow (oField) {
    oField = document.getElementById("myTranslation");
    if (oField.scrollHeight > oField.clientHeight) {
      oField.style.height = oField.scrollHeight + "px";
    }
  }