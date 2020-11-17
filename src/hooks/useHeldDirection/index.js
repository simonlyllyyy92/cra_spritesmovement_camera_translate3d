import {useState} from 'react'


export default function setDirections(type, which) {
    let held_directions = []

    const directions = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
     }

    const keys = {
        38: directions.up,
        37: directions.left,
        39: directions.right,
        40: directions.down,
    }

    if(type === 'keydown'){
        const dir = keys[which];
        if (dir && held_directions.indexOf(dir) === -1) {
           held_directions.unshift(dir)
        }
    }else if(type === 'keyup'){
        const dir = keys[which]
        const index = held_directions.indexOf(dir);
        if (index > -1) {
           held_directions.splice(index, 1)
        }
    }
}