import {switchMap} from '../../store/mapStore/action'
import {mapConfig} from '../../config'

export const setPlacement = ({x_aixs= 90, y_axis= 34, dispatch}) => {
    let x = x_aixs
    let y = y_axis
    const stepSize = 1;
    const pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
     );
    const grillSize = pixelSize * 16
    
    const camera_left = (160 * pixelSize) / 2 - grillSize / 2 // camera width / 2 - character width / 2
    const camera_top = (144 * pixelSize) / 2 - grillSize / 2  // camera height / 2 - character height / 2 
    
    const modifier = {
        down: {x: 0, y: stepSize},
        left: {x: -stepSize, y: 0},
        right: {x: stepSize, y: 0},
        up: {x: 0, y: -stepSize}
    }
    
    /**
     * @OneBox height and width should be 1 * var(--grid-cell)
     *  it equals to 80px in large Screen as pixelsize = 5px in large screen
     *  13 box horizontally and 10 box vertically
     * @Basedon current map height and width     
     *  width: calc(13 * var(--grid-cell)); 
     *  height: calc(10 * var(--grid-cell));
     * @So change the grid-cell value if want to change the map size, don't change the number
     *  cause number represent the box's number
     */
    const leftLimit = 0 * grillSize / pixelSize; // character can not go beyond the first left box
    const rightLimit = 12 * grillSize / pixelSize; // character cannot go beyond more than 12 boxes on the right
    const topLimit = 2 * grillSize / pixelSize + 8; // the character can't reach top 2 boxes + 8 * pixelSize
    const bottomLimit = 8 * grillSize / pixelSize; //10 boxes in vertical totally, and bottomlimit = 9 * boxes - 1 * bodysize,  which are, 9 * grillSize / pixelSize - 1 * grillSize / pixelSize
                                                   // as character body is equal to one box width and height
    
    function step(dir) {
        const character = document.querySelector('.character')
        const map = document.querySelector('.map')
        if(dir){
            x = x + modifier[dir].x
            y = y + modifier[dir].y
        }
    
           //Limits (gives the illusion of walls)
       if (x < leftLimit) { x = leftLimit; }
       if (x > rightLimit) { x = rightLimit; }
       if (y < topLimit) { y = topLimit; }
       if (y > bottomLimit) { 
           y = bottomLimit; 
           dispatch(switchMap(mapConfig))
        }
        map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0px )`;
        character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0px )`; 
    }

    function aiStep(){
        const ai = document.querySelector('.ai')
        ai.style.transform=`translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0px )`
    }
    
    return {
        step,
        aiStep
    }
}

