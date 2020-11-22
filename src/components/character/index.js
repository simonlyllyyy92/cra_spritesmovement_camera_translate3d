import React, {useState, useRef, useEffect} from 'react'
import SpriteSheet from '../spriteSheet'
import './index.css'
import {connect} from 'react-redux'

//hooks
import useKeyPress from '../../hooks/useKeyPress'
import setDirections from '../../hooks/useHeldDirection'

const Character = ({sprites, step, direction, mapState}) => {
    const [dir, setDir] = useState(direction)
    const [walking, setWalking] = useState('stop')
    const [hasFacing, setHasFacing] = useState('')

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

    useEffect(() => {
        moveRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(moveRef.current);
    },[hasFacing, mapState]); // the requestAnimationFrame will trigger and only trigger once every time that hasFacing is changed


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

const mapStateToProps = (state) => ({
    mapState: state.mapReducer.mapSource,
    peopleState: state.mapReducer.people,
})

export default connect(mapStateToProps)(Character)


