import React, {useState, useRef, useEffect} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

//helpers
import step from '../../helpers/setPlacements'

const Character = ({sprites}) => {
    const [dir, setDir] = useState('')
    const [walking, setWalking] = useState('stop')
    const [hasFacing, setHasFacing] = useState('')

    //If having mutable values that needs to be remembered at the next or later renders 
    //and don’t want them to trigger a re-render when they change, then use useRef
    const moveRef = useRef()

    useKeyPress((e) => {
        const facing = setDirections(e.type, e.which)
        if(facing){
            setDir(facing)
        }
        setHasFacing(facing)
        setWalking(facing ? 'start' : 'stop')
        e.preventDefault()
    })

 
    const animate = time => {
        step(dir)
        if(hasFacing){
            moveRef.current = requestAnimationFrame(animate);
        }
    }

    /**
     *  If Using true or false boolean value for hasFacing, the following problem will show
     *  1. When use Press left key while at the same time press right key, it turns out that facing will be 'right'
     *     if setting the hasfacing to true or false like setwalking in usekeypress, 
     *     the hasFacing will always be true  cause there will always be a value for facing if we press 2 keys together or switch in a very short period of time
     *     which turns out --> the following useEffect will not re trigger as hasFacing hasn't change and the step(dir)will not run with the latest dir value
     *     eventually it will move towards the first pressed key's direction and keep going that way
     */
    useEffect(() => {
        moveRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(moveRef.current);
    },[hasFacing]); // the requestAnimationFrame will trigger and only trigger once every time that hasFacing is changed


    return (
        <div 
            className="character" 
            facing={dir} 
            walking={walking} 
        >
            <SpriteSheet sprites={sprites}/>
        </div>
    )
}

export default Character


