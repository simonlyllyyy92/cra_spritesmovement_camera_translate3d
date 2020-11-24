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

export interface MapState {
    mapSource: string;
    people: Array<People>;
    walls:Walls;
}