var title,statsImage
function setup() {
  createCanvas(windowWidth-6,windowHeight);
  title=createElement("h1","CURRENT STATS");
        statsImage=createImg("statsImg.png")
}

function draw() {
  title.position(width/2-70, 0);

        statsImage.position(width/2-500,height/2-250)
       statsImage.style("width","70%")
       statsImage.style("height","80%")
  
}