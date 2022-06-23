
const button = document.querySelector('.draw');
const palette = document.querySelectorAll('.colorElement');
const redValue = document.querySelectorAll('.red');
const greenValue = document.querySelectorAll('.green');
const blueValue = document.querySelectorAll('.blue');
const hexNumber = document.querySelectorAll('.hex');

const ColorCircle = function(){
    this.red = '';
    this.green = '';
    this.blue = '';
    this.hexValue = '';
}
ColorCircle.prototype.drawPallet = function(){
    this.red = Math.floor(Math.random()*256);
    this.green = Math.floor(Math.random()*256);
    this.blue = Math.floor(Math.random()*256);
}

ColorCircle.prototype.hexValueCalc = function(){
    let r = this.red.toString(16);
    let g = this.green.toString(16);
    let b = this.blue.toString(16);
    if(r <16){
        r = "0" + r;
    }else if(g < 16){
        g = "0" + g;
    }else if(b < 16){
        b = "0" + b;
    }
    return this.hexValue = `#${r}${g}${b}`;
}

const paletteElement = new ColorCircle();

const drawColors = () =>{
    for(let i=0; i<palette.length; i++){
        paletteElement.drawPallet();
        palette[i].style.backgroundColor =
         `rgb(${paletteElement.red},
             ${paletteElement.green},
              ${paletteElement.blue})`;
        
        
        redValue[i].textContent = `R: ${paletteElement.red}`;
        greenValue[i].textContent = `G: ${paletteElement.green}`;
        blueValue[i].textContent = `B: ${paletteElement.blue}`;
        paletteElement.hexValueCalc();
        hexNumber[i].textContent = `${paletteElement.hexValue}`;
        
    }
    
}
button.addEventListener('click', function(){
    drawColors()
})