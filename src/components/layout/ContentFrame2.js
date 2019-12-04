import React from 'react'

import './ContentFrame2.css'

const ContentFrame = (props) => {
    return (  
        <div className="ContentFrame2-Box">
            <div className="ContentFrame2-Icon">
                <img src={props.src} alt="Icon"/>
            </div>         
            <div className="ContentFrame2-Content">
                {props.content}
            </div>
        </div>
    )
}

export default ContentFrame


