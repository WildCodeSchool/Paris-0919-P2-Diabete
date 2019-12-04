import React from 'react'
import { Link } from "react-router-dom"

import './HeaderMobile.css'

const HeaderMobile = (props) => {
    return (
        <div className="headerBox">
            <Link to="/" className="HeaderMobile_logo">
                <img src={props.src} alt="Logo" />
            </Link>
        </div>
    )
}

export default HeaderMobile