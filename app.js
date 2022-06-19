
const button = document.querySelector('.draw');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
let drawColors = [];

drawColors = () =>{
    for(let i=0; i <=11; i++){
        let value = Math.floor(Math.random()*256);
        drawColors[i] = value
    }
color1.setAttribute('style', `background-color: rgb(${drawColors[0]}, ${drawColors[1]}, ${drawColors[2]})`);
$('.pColor1').text(`${drawColors[0]}, ${drawColors[1]}, ${drawColors[3]}`)

color2.setAttribute('style', `background-color: rgb(${drawColors[3]}, ${drawColors[4]}, ${drawColors[5]})`);
$('.pColor2').text(`${drawColors[3]}, ${drawColors[4]}, ${drawColors[5]}`)

color3.setAttribute('style', `background-color: rgb(${drawColors[6]}, ${drawColors[7]}, ${drawColors[8]})`);
$('.pColor3').text(`${drawColors[6]}, ${drawColors[6]}, ${drawColors[8]}`)

color4.setAttribute('style', `background-color: rgb(${drawColors[9]}, ${drawColors[10]}, ${drawColors[11]})`);
$('.pColor4').text(`${drawColors[9]}, ${drawColors[10]}, ${drawColors[11]}`)
}


button.addEventListener('click', function(){
    drawColors()
})