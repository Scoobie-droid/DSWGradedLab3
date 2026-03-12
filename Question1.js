document.getElementById("Execute").addEventListener("click", processSentence);

function processSentence(){

let sentence = document.getElementById("sentence").value;
sentence = sentence.replace(/[^\w\s]/g, "");
let words = sentence.split(" ");
let count = words.length;

document.getElementById("sent-count").value = count;
let output = "";

for(let i = 0; i < words.length; i++){
output += "<u>" + words[i] + "</u> ";
}

document.getElementById("words").innerHTML = output;
}