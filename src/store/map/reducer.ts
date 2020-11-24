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
        walls: {width:13, height:10}
    }
} 

export const mapReducer = (state = initialState, action : MapActionTypes): MapInitialState =>{
    switch (action.type) {
        case ActionTypes.START_SWITCH_MAP:
            return {
                ...state,
                maps: {
                    mapSource: action.payload.mapSource,
                    people: action.payload.people,
                    walls: action.payload.walls
                }
            }
        default:
            return state
    }
}