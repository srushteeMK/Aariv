var title,statsImage,para
function setup() {
  createCanvas(windowWidth-6,windowHeight);
  title=createElement("h1","REASONS OF GLOBAL WARMING");
        statsImage=createImg("reasonsImg.png")
        para=createElement("h2","The biggest causes of global warming are deforestation, factories, electricity wastage, etc. Deforestation reduces the number of trees, which means there will be more carbon dioxide in the air. Factories produce a lot of greenhouse gases, and most electricity requires burning fossil fuels, When fossil fuels are burned, they release large amounts of carbon dioxide, a greenhouse gas, into the air. Greenhouse gases trap heat in our atmosphere, causing global warming.")
}

function draw() {
  title.position(570, 0);

        statsImage.position(220, 90)
       statsImage.style("width","70%")
       statsImage.style("height","80%")

       para.position(120,700)
  
}
