var random1=Math.floor(Math.random()*6)+1;

var randomSrc1="images/"+"dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSrc1);

var random2=Math.floor(Math.random()*6)+1;
var randomSrc2="images/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSrc2);

if(random1>random2){
  document.querySelector("h1").innerHTML=("Player 1 Won! ");
}
else if(random2>random1){
  document.querySelector("h1").innerHTML=("Player 2 Won! ");
}
else{
  document.querySelector("h1").innerHTML=("Tie! ");
}
