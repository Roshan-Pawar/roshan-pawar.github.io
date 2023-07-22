var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNum1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNum2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDice2);

if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
  document.querySelectorAll("p")[0].innerHTML = "Player 1🚩";
} else if (randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
  document.querySelectorAll("p")[1].innerHTML = "Player 2🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
