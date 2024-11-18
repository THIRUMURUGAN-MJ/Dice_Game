var player1Name=prompt("Enter the Name of the Player 1");
var player2Name=prompt("Enter the Name of the Player 2");
function myfun(){

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage1="images/dice"+randomNumber1+".png";
var randomdiceimage2="images/dice"+randomNumber2+".png";
var image1= document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomdiceimage1);
image2.setAttribute("src",randomdiceimage2);
if(randomNumber1>randomNumber2)
{
var H1=document.querySelector("h1");
H1.innerHTML=player1Name+" Wins";
}
else if(randomNumber2>randomNumber1){
var H2=document.querySelector("h1");
H2.innerHTML=player2Name+" Wins";
}
else
{
    var H3=document.querySelector("h1");
    H3.innerHTML="It's a Draw!!!";
}
document.getElementById("butt").classList.add("invisible");
}