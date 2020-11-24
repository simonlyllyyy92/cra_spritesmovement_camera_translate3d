import * as React from 'react'
import '../styles/index.css'
import {Sprites} from '../../index'

interface BotProps {
    sprites:string;
    step: Function;
    direction:string;
}

const Bot: React.FunctionComponent<BotProps> = ({sprites, step, direction}) => {
    const [dir, setDir] = React.useState(direction)
    const [walking, setWalking] = React.useState('stop')

    React.useEffect(() => step(),[])

    return (
        <div
            className="ai"
            data-facing={dir}
            data-walking={walking}
        >
            <Sprites sprites={sprites}/>
        </div>
    )
}

export default Bot