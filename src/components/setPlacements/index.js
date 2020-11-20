import React from 'react'
//helpers
import {setPlacement} from '../../helpers/setPlacements'
import Character from '../character'
import AI from '../ai'

const SetPlacements = ({sprites, x, y, isPlayer, dir}) => {
    const {step, aiStep} = setPlacement({x_aixs: x, y_axis: y})
    return (
        <div>
            {isPlayer ? 
                <Character sprites={sprites} step={step}/> 
                : 
                <AI sprites={sprites} step={aiStep} dir={dir}/>
            }
        </div>
    )
}

export default SetPlacements