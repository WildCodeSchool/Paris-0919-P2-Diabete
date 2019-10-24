import React from 'react'
import './HeaderMobile.css'
import MainLogo from '../../assets/pictures/logo_OMG.svg'

const HeaderMobile = () => {
    return (
        <div className="headerBox">
            <img src={MainLogo} alt="oh my g" className="header-title" />
        </div>
    )
}

export default HeaderMobile