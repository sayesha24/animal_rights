var background_imgs = [];
var shownImages = [];
var count = 0;
var allImagesLoaded = false; // Flag to check if all images are loaded
var loadingText = "Please wait till the website loads...";
var totalImages = 11; // Total number of images
var loadCount = 0; // Count of loaded images

function preload() {
  background_imgs[1] = loadImage("backgroundImg/leopard.png", imageLoaded);
  background_imgs[2] = loadImage("backgroundImg/lion.webp", imageLoaded);
  background_imgs[3] = loadImage("backgroundImg/panda.webp", imageLoaded);
  background_imgs[4] = loadImage("backgroundImg/blackbuck.png", imageLoaded);
  background_imgs[5] = loadImage("backgroundImg/black_monkey.png", imageLoaded);
  background_imgs[6] = loadImage("backgroundImg/rh.png", imageLoaded);
  background_imgs[7] = loadImage("backgroundImg/deer.jpg", imageLoaded);
  background_imgs[8] = loadImage("backgroundImg/lion_2.jpg", imageLoaded);
  background_imgs[9] = loadImage("backgroundImg/redpanda.jpg", imageLoaded);
  background_imgs[10] = loadImage("backgroundImg/dolphin.jpg", imageLoaded);
  background_imgs[11] = loadImage("backgroundImg/squirrel.jpg", imageLoaded);
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  background_img = createSprite(1300, 550, displayWidth, displayHeight);
  background_img.scale = 0.9;
}

function draw() {
  background("black");

  if (!allImagesLoaded) {
    fill("white");
    textSize(40);
    textAlign(CENTER, CENTER);
    text(loadingText, displayWidth / 2, displayHeight / 2);
  } else {
    spawnBackground();
    drawSprites();

    fill("orange");
    textSize(200);
    textAlign(CENTER, CENTER);
    text(count + "+", displayWidth / 2 - 600, displayHeight / 2 - 150);
    textSize(40);
    fill("white");
    text("Endangered Species in India", displayWidth / 2 - 600, displayHeight / 2 - 50);

    count_increment();
  }
}

function imageLoaded() {
  loadCount++;
  if (loadCount === totalImages) {
    allImagesLoaded = true;
  }
}

function count_increment() {
  if (frameCount % 5 === 0 && count < 300) {
    count++;
  }
}

function spawnBackground() {
  if (frameCount % 100 === 0) {
    var img;

    do {
      img = Math.round(random(1, 11));
    } while (shownImages.includes(img));

    shownImages.push(img);

    if (shownImages.length >= 11) {
      shownImages = [];
    }

    background_img.addImage(background_imgs[img]);
  }
}

// Add event listeners for buttons
document.getElementById("campaignButton").addEventListener("click", function() {
  window.location.href = 'campaign.html';
});

document.getElementById("articlesButton").addEventListener("click", function() {
  window.location.href = 'articles.html';
});

document.getElementById("aboutUsButton").addEventListener("click", function() {
  window.location.href = 'about_us.html';
});

document.getElementById("laws_button").addEventListener("click", function() {
  window.location.href = 'laws.html';
});
