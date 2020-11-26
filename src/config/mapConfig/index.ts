import {imageGalary, mapsGalary} from '../../assets'
import {MapState} from '../../store/interfaces/index'

const pixelSize :number = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
 );
const grillSize :number = pixelSize * 16

export const mapConfig : MapState = 
    {
        mapSource: mapsGalary.map2,
        people: [
            {
                id: 1,
                skinId: imageGalary.m2,
                direction: "right",
                x: 6 * grillSize / pixelSize,
                y: 1 * grillSize / pixelSize  + 8,
                isPlayer: true
            },
            {
                id: 2, 
                skinId: imageGalary.m3,
                direction: "left",
                x: 6 * grillSize / pixelSize,
                y: 7 * grillSize / pixelSize,
                isPlayer: false
            }
        ],
        walls:{
            width:15,
            height:15
        }
    }
