import * as React from 'react'

import '../styles/index.css'

import useKeyPress from '../../../hooks/useKeyPress'
import setDirections from '../../../helpers/setheldDirection/setHeldDirection'

import {Sprites} from '../../index'

interface CharacterProps {
    sprites: string;
    step: Function;
    direction: string;
}

const Character : React.FunctionComponent<CharacterProps> = ({sprites, step, direction}) => {
    const [dir, setDir] = React.useState(direction)
    const [walking, setWalking] = React.useState('stop')
    const [hasFacing, setHasFacing] = React.useState('')

    const moveRef = React.useRef<number>()

    useKeyPress((e : React.KeyboardEvent) => {
        const facing : string | null= setDirections(e.type, e.which)
        if(facing){
            setDir(facing)
        }
        setHasFacing(facing)
        setWalking(facing ? 'start' : 'stop')
        e.preventDefault()
    })

    const animate = () => {
        step(dir)
        if(hasFacing){
            moveRef.current = requestAnimationFrame(animate);
        }
    }
    
    React.useEffect(() => {
        moveRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(moveRef.current as number);
    },[hasFacing]); 
    
    return (
        <div
            className="character"
            data-facing={dir}
            data-walking={walking}
        >
            <Sprites sprites = {sprites} />
        </div>
    ) 
}

export default Character