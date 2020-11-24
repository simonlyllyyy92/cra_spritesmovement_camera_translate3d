import {useEffect} from 'react'

export default function useKeyPress(fn:any){
    useEffect(() => {
        document.addEventListener('keydown', fn)
        document.addEventListener('keyup', fn)
        return () => {
            document.removeEventListener('keydown', fn)
            document.removeEventListener('keyup', fn)
        }
    })
}