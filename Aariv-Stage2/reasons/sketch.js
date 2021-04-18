var title,statsImage
function setup() {
  createCanvas(windowWidth-6,windowHeight);
  title=createElement("h1","REASONS OF GLOBAL WARMING");
        statsImage=createImg("reasonsImg.png")
}

function draw() {
  title.position(570, 0);

        statsImage.position(220, 90)
       statsImage.style("width","70%")
       statsImage.style("height","80%")
  
}