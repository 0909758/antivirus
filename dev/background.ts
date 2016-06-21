//Create a new background with 3 layers
class Background {
    
    private backgroundCells:backgroundCells;
    public animation: boolean;
    
    //Use the parameters to choose background images (back & front layer)
    constructor(backLayerImage:number, frontLayerImage:number, animation:boolean){
        this.createBackground();
        this.backLayer(backLayerImage);
        this.midLayer();
        this.animation = animation;
        this.frontLayer(frontLayerImage, this.animation);


    }    
   
    createBackground(){
        var background = document.createElement("background");
        background.setAttribute("id", "background");
        document.body.appendChild(background);
    }
    
    //Create the back layer image (first background image)
    backLayer(backLayerImage){
        var backLayer = document.createElement("backLayer");
        backLayer.style.backgroundImage = "url(\"../images/backgrounds/backLayer" + backLayerImage + ".png\")";
        document.getElementById("background").appendChild(backLayer);
    }
        
    //Create the mid layer images (animated bloodcells)
    midLayer(){
        //Create far range bloodcells (small size & low speed)
        this.backgroundCells = new backgroundCells(26,36, "backgroundCellSmall", "small");
         
        //Create mid range bloodcells (mid size & mid speed)
        this.backgroundCells = new backgroundCells(16,26, "backgroundCellMedium", "medium");
         
        //Create close range bloodcells (big sized & fast speed)
        this.backgroundCells = new backgroundCells(6,16, "backgroundCellLarge", "large");        
    }
        
    //Create front layer image (transparent second background image)
    private frontLayer(frontLayerImage, animation:boolean){
        var frontLayer = document.createElement("frontLayer");
        frontLayer.style.backgroundImage = "url(\"../images/backgrounds/frontLayer" + frontLayerImage + ".png\")";  
        document.getElementById("background").appendChild(frontLayer);
        console.log(animation);
        if(animation == true){
            var frontLayer2 = document.createElement("frontLayer2");
            frontLayer2.style.backgroundImage = "url(../images/backgrounds/frontLayer2.png)";
            document.getElementById("background").appendChild(frontLayer2);
            
            frontLayer.style.animation = "frontOpacityDecrease 180000ms linear";
            frontLayer.style.animationFillMode = "forwards";
            
            frontLayer2.style.animation = "frontOpacityIncrease 180000ms linear";
            frontLayer2.style.animationFillMode = "forwards";
            
            //frontLayer.style.animation = "frontLayerFade 180000ms linear";
            //frontLayer.style.animationFillMode = "forwards";
        }    
    }
}