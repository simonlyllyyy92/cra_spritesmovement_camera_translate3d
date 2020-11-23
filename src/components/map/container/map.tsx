import * as React from "react";

interface wallState {
    width: number;
    height: number;
}

interface peopleState {
    id:number;
    skinId: string;
    direction: string;
    x: number;
    y: number;
    isPlayer:boolean;

}

interface MapProps {
    mapState: string;
    peopleState: Array<peopleState>;
    wallState: wallState;

}
const Map : React.FunctionComponent<MapProps> = ({mapState, peopleState, wallState}) => {
    const pixelSize:number = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    )
    const grillSize:number = pixelSize * 16 
    const width:number = wallState.width * grillSize
    const height:number = wallState.height * grillSize

    return (
        <div className="map pixel-art" style={{
            backgroundImage:`url(${mapState})`,
            width:`${width}px`,
            height:`${height}px`
        }}>
            {peopleState.map(item => 
                <SetPlacements 
                    sprites = {item.skinId}
                    key = {item.id}
                    x={item.x}
                    y={item.y}
                    isPlayer={item.isPlayer}
                    dir={item.direction}
                />
            )}
        </div>
    )
}

export default Map