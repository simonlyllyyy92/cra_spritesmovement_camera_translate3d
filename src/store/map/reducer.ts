import {imageGalary} from '../../assets'
import {
    ActionTypes, 
    MapActionTypes,
    MapInitialState
} from '../interfaces'


const pixelSize : number = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
);

const grillSize : number = pixelSize * 16;

const initialState : MapInitialState = {
    maps:{
        id: 16,
        mapSource: "https://assets.codepen.io/21542/CameraDemoMap.png",
        //direction should be in lower case
        people: [
            {
                id: 1,
                skinId: imageGalary.m2,
                direction: "down",
                x: 6 * grillSize / pixelSize,
                y: 3 * grillSize / pixelSize  + 8,
                isPlayer: true
            },
            {
                id: 2, 
                skinId: imageGalary.m1,
                direction: "up",
                x: 6 * grillSize / pixelSize,
                y: 7 * grillSize / pixelSize,
                isPlayer:false
            }
        ],
        walls: {width:13 * grillSize, height:10 * grillSize},
        blocks: [
            {
                3:{
                    x1: 0,
                    x2: 13
                }
            }
        ]
    }
} 

export const mapReducer = (state = initialState, action : MapActionTypes): MapInitialState =>{
    switch (action.type) {
        case ActionTypes.START_SWITCH_MAP:
            return {
                ...state,
                maps: {
                    id: action.payload.id,
                    mapSource: action.payload.mapSource,
                    people: action.payload.people,
                    walls: action.payload.walls,
                    blocks: action.payload.blocks
                }
            }
        default:
            return state
    }
}