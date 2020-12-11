import {switchMap} from '../../store/map/action'

import {mapConfig} from '../../config/mapConfig'

 interface MapBorders {
    width: number;
    height: number;
}
interface Blocks {
    [key:number] : {x1: number; x2: number}
}

interface PositionProps {
    x_axis: number;
    y_axis: number;
    dispatch: Function;
    walls: MapBorders;
    blocks: Array<Blocks>;
}
interface Modifier  {
    [key:string] : {x: number; y: number};
}

export const setPlacement = ({x_axis = 90, y_axis=34, dispatch, walls, blocks} : PositionProps) => {
    let x : number = x_axis
    let y : number = y_axis
    const stepSize : number = 1;
    const pixelSize : number = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    )
    const grillSize: number = 16 * pixelSize

    const camera_left : number = (160 * pixelSize) / 2 - grillSize / 2 // camera width / 2 - character width / 2
    const camera_top : number =  (144 * pixelSize) / 2 - grillSize / 2  // camera height / 2 - character height / 2 

    const modifier : Modifier = {
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
    const {width, height} = walls

    const leftLimit : number =  0
    const rightLimit : number = (width - 1 * grillSize)/pixelSize
    const topLimit : number = 0
    const bottomLimit : number = (height - 2 * grillSize)/pixelSize

    function step(dir:string):void{
        const character : HTMLElement | null= document.querySelector('.character')
        const map : HTMLElement | null = document.querySelector('.map')

        if(dir){
            x = x + modifier[dir].x
            y = y + modifier[dir].y
        }
        // if steps reach the walls limits then stop
        if (x < leftLimit) { x = leftLimit; }
        if (x > rightLimit) { x = rightLimit; }
        if (y < topLimit) { y = topLimit; }
        if (y > bottomLimit) { 
            y = bottomLimit; 
            dispatch(switchMap(mapConfig))
         }

        //  console.log(x, y)
         if(map === null){
             alert('cannot find map element')
         }else{
            map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0px )`;
         }

         if(character === null){
             alert('cannot find character element')
         }else{
            character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0px )`; 
         }
    }

    function aiStep(){
        const ai : HTMLElement | null= document.querySelector('.ai')
        if(ai === null){
            alert('ai element is null')
        }else{
            ai.style.transform=`translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0px )`
        }
    }

    return {
        step,
        aiStep
    }
}