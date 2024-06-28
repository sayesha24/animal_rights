var img;

function preload(){

    img= loadImage("lion.avif");
}

function setup(){
    createCanvas(displayWidth, displayHeight);
}

function draw(){
    background("black"); 
    
    
    drawSprites();
}

window.onload = function(){
document.getElementById("campaignButton").addEventListener("click", function() {
    window.location.href = 'campaign.html';
  });
  
  document.getElementById("articlesButton").addEventListener("click", function() {
    window.location.href = 'articles.html';
  });
  
  document.getElementById("aboutUsButton").addEventListener("click", function() {
    window.location.href = 'about_us.html';
  });
  
  document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = 'index.html';
  });
}