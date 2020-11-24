import * as React from "react";
import '../styles/index.css'
import {PropsFromRedux, connector} from '../components/connecter'
import {Setplacements} from '../../index'


const Map : React.FunctionComponent<PropsFromRedux> = ({mapState, peopleState, wallState}) => {
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
                <Setplacements 
                    sprites={item.skinId}
                    key={item.id}
                    x={item.x}
                    y={item.y}
                    isPlayer={item.isPlayer}
                    dir={item.direction}
                />
            )}
        </div>
    )
}

export default connector(Map)