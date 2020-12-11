interface People {
    id: number;
    skinId: string;
    direction: string;
    x: number;
    y: number;
    isPlayer: boolean
}

interface Walls {
    width: number;
    height: number;
}

interface Blocks {
    [key:number] : {x1: number; x2: number}
}

export interface MapState {
    mapSource: string;
    people: Array<People>;
    walls:Walls;
    blocks: Array<Blocks>;
    id: number;
}