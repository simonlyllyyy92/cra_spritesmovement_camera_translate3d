import React from 'react'
import SetPlacements from '../setPlacements'
import './index.css'
import {connect} from 'react-redux'
//character 
const Map = ({mapState, peopleState, wallState}) => {
    const pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
     );
    const grillSize = pixelSize * 16

    const width = wallState.width * grillSize
    const height = wallState.height * grillSize

    return (
        <div className="map pixel-art" style={{
            backgroundImage: `url(${mapState})`,
            width:`${width}px`,
            height: `${height}px`
        }}>
            {peopleState.map(item => 
                <SetPlacements 
                    sprites={item.skinId} 
                    key={item.id}
                    x={item.x} 
                    y={item.y} 
                    isPlayer={item.isPlayer}
                    dir={item.direction} 
                />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    mapState: state.mapReducer.mapSource,
    peopleState: state.mapReducer.people,
    wallState: state.mapReducer.walls
})

export default connect(mapStateToProps)(Map)