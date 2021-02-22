// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    
    nbCase: 8,
    
    Download_Image: () => save(),
}
gui.add(params, "nbCase", 2, 20, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('red');
    noStroke();
    let x = 0;
    let y = 0;
    for(let i = 0; i < params.nbCase;i++){
        console.log(y)
        
        for(let j = 0; j < params.nbCase;j++){
            (i+j)%2==0 ? fill('black') : fill('white'); 
            square(x, y, width/params.nbCase);
            x += width/params.nbCase;
            
        }
        x=0;
        y += height/params.nbCase;
    }

}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}