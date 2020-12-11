import {imageGalary, mapsGalary} from '../../assets'
import {MapState} from '../../store/interfaces/index'

const pixelSize :number = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
 );
const grillSize :number = pixelSize * 16

export const mapConfig : MapState = 
    {
        id: 21,
        mapSource: mapsGalary.map2,
        people: [
            {
                id: 1,
                skinId: imageGalary.m2,
                direction: "right",
                x: 7 * grillSize / pixelSize,
                y: 0 * grillSize / pixelSize,
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
            width: 15 * grillSize,
            height: 15 * grillSize
        },
        blocks: [
          {
              5: {
                  x1: 7,
                  x2: 9
              }
          }
        ]
    }
