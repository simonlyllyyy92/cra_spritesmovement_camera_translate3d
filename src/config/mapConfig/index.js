import {imageGalary, mapsGalary} from '../../assets'

const pixelSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
 );
const grillSize = pixelSize * 16

export const mapConfig = 
    {
        mapSource: mapsGalary.map2,
        people: [
            {
                id: 1,
                skinId: imageGalary.m2,
                direction: "right",
                x: 6 * grillSize / pixelSize,
                y: 6 * grillSize / pixelSize  + 8,
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
            height: 15
        }
    }
