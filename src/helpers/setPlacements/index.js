
let x = 90
let y = 34


const stepSize = 1;
const pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
 );
const camera_left = pixelSize * 66;
const camera_top = pixelSize * 42;

const modifier = {
    down: {x: 0, y: stepSize},
    left: {x: -stepSize, y: 0},
    right: {x: stepSize, y: 0},
    up: {x: 0, y: -stepSize}
}


 export default function step(dir) {
    const character = document.querySelector('.character')
    const map = document.querySelector('.map')
    if(dir){
        x = x + modifier[dir].x
        y = y + modifier[dir].y
    }
    // console.log(x, y)
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0px )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0px )`; 
}

