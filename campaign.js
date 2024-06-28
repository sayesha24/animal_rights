var img;


function setup(){
    createCanvas(displayWidth, displayHeight);
}

function draw(){
    background("black"); 
    
    
    drawSprites();
}

window.onload = function(){
document.getElementById("aboutUsButton").addEventListener("click", function() {
    window.location.href = 'about_us.html';
  });
  
  document.getElementById("articlesButton").addEventListener("click", function() {
    window.location.href = 'articles.html';
  });
  
  document.getElementById("law_button").addEventListener("click", function() {
    window.location.href = 'laws.html';
  });
  
  document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = 'index.html';
  });
}