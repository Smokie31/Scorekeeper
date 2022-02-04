function incA(){
    
    var score = parseInt(document.getElementById("score-displayA").innerHTML);
    score++;
    document.getElementById("score-displayA").innerHTML = score;
    // console.log("it is getting triggered")
}
function decA(){
    var score = parseInt(document.getElementById("score-displayA").innerHTML);
    if (score > 0){
    score--;}
    document.getElementById("score-displayA").innerHTML = score;
    // console.log("DecA is getting triggered")
}

// functions for B Team

function incB(){
    var score = parseInt(document.getElementById("score-displayB").innerHTML);
    score++;
    document.getElementById("score-displayB").innerHTML = score;
    // console.log("incA is getting triggered")
}
function decB(){
    var score = parseInt(document.getElementById("score-displayB").innerHTML);
    if (score>0){
    score--;
    }
    document.getElementById("score-displayB").innerHTML = score;
    // console.log("incA is getting triggered")
}
function reset(){
    // var score = document.parseInt(getElementById('score-displayA').innerHTML);
    // var score = document.parseInt(getElementById('score-displayB').innerHTML);
    var score = 0
    document.getElementById("score-displayA").innerHTML = score;
    document.getElementById("score-displayB").innerHTML = score;
    console.log("Reset is getting triggered")


}