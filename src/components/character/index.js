import React, {useState, useRef, useEffect} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

//helpers
import setPlacements from '../../helpers/setPlacements'

const Character = () => {
    const [dir, setDir] = useState('')
    const [walking, setWalking] = useState('stop')

    useKeyPress((e) => {
        const facing = setDirections(e.type, e.which)
        if(facing){
            setDir(facing)
        }
        setPlacements(facing)
        setWalking(facing ? 'start' : 'stop')
        e.preventDefault()
    })

    useEffect(() => {
        setPlacements(dir)
    }, [])
 

    return (
        <div className="character" facing={dir} walking={walking}>
            <SpriteSheet />
        </div>
    )
}

export default Character