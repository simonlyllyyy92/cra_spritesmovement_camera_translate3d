interface Directions {
    [keys:string]:string
}

interface Keys {
    [key:number]:string
}

let held_directions:Array<string> = []

export default function setDirections(type:string, which:number) : string {

    const directions : Directions = {
        up: "up",
        down: "down",
        left: "left",
        right: "right",
     }

    const keys : Keys = {
        38: directions.up,
        37: directions.left,
        39: directions.right,
        40: directions.down,
    }

    if(type === 'keydown'){
        const dir : string = keys[which];
        if (dir && held_directions.indexOf(dir) === -1) {
           held_directions.unshift(dir)
        }
    }else if(type === 'keyup'){
        const dir : string = keys[which]
        const index = held_directions.indexOf(dir);
        if (index > -1) {
           held_directions.splice(index, 1)
        }
    }

    return held_directions[0]
}