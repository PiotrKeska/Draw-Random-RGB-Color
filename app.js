
const button = document.querySelector('.draw');
const palette = document.querySelectorAll('.colorElement');
const redValue = document.querySelectorAll('.red');
const greenValue = document.querySelectorAll('.green');
const blueValue = document.querySelectorAll('.blue');

const ColorCircle = function(){
    this.red = '';
    this.green = '';
    this.blue = '';
}
ColorCircle.prototype.drawPallet = function(){
    this.red = Math.floor(Math.random()*256);
    this.green = Math.floor(Math.random()*256);
    this.blue = Math.floor(Math.random()*256);
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
        


        console.log(paletteElement.red);
    }
    
}
button.addEventListener('click', function(){
    drawColors()
})