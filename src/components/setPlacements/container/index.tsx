import * as React from 'react'
import {setPlacement} from '../../../helpers/setPlacement/setPlacement'
import {connector, PropsFromRedux} from '../components/connecter'
import {Characters} from '../../index'
import {Bot} from '../../index'

interface PlacementsProps extends PropsFromRedux{
    sprites: string;
    x: number;
    y: number;
    isPlayer: boolean;
    dir: string;
}

const SetPlacements : React.FunctionComponent<PlacementsProps> = ({sprites, x, y, isPlayer, dir, dispatch, walls}) => {
    const {step, aiStep} = setPlacement({x_axis:x, y_axis: y, dispatch, walls})
    return (
        <div>
            {
                isPlayer ?
                    <Characters sprites={sprites} step={step} direction={dir}/>
                        :
                    <Bot sprites={sprites} step={aiStep} direction={dir} />   
            }
        </div>
    )
} 
export default connector(SetPlacements)  