import React, { useState } from 'react'
import {init} from '../3d/init'
export const Model = ({condition}) => {
    const [modelToDisplay, setModelToDisplay] = useState(undefined)
    return (
        <div className="model-container">
            {modelToDisplay ? modelToDisplay : 'Loading model...'}
        </div>
    )
}
