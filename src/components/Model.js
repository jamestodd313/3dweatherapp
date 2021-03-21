import React, { useState } from 'react'

export const Model = ({condition}) => {
    const [modelToDisplay, setModelToDisplay] = useState(undefined)
    return (
        <div>
            {modelToDisplay ? modelToDisplay : 'Loading model...'}
        </div>
    )
}
