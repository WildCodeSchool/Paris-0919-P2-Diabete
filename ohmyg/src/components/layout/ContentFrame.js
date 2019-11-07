import React from 'react'
import './ContentFrame.css'

const ContentFrame = (props) => {
    return (  
        <div className="ContentFrame-Box">
            <div className="ContentFrame-Icon">
                <img src={props.src} alt="Icon"/>
            </div>         
            <div>{props.content}</div>
        </div>
    )
}

export default ContentFrame


