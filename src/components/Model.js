import React, { useEffect, useRef, useState } from 'react'
import {_3d} from '../3d/_3d'
export const Model = ({condition}) => {
    const [modelToDisplay, setModelToDisplay] = useState(undefined)
    const containerRef = useRef(null)
    
    useEffect(()=>{
        let scene = null
        if(containerRef){
            scene = new _3d(containerRef.current)
            scene.init()
            scene.startLoop()
            scene.renderModel(condition)
        }
        return(()=> {if(scene) scene.removeScene()})
    },[containerRef])
    return (
        <div className="model-container" ref={containerRef}></div>
    )
}
