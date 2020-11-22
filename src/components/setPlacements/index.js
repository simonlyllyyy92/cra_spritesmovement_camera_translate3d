import React from 'react'
import {connect} from 'react-redux'
//helpers
import {setPlacement} from '../../helpers/setPlacements'
import Character from '../character'
import AI from '../ai'

const SetPlacements = ({sprites, x, y, isPlayer, dir,dispatch}) => {
    const {step, aiStep} = setPlacement({x_aixs: x, y_axis: y, dispatch})
    return (
        <div>
            {isPlayer ? 
                <Character sprites={sprites} step={step} direction={dir}/> 
                : 
                <AI sprites={sprites} step={aiStep} direction={dir}/>
            }
        </div>
    )
}

export default connect()(SetPlacements)