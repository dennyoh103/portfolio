import React from 'react'
import "./Darkmode.css"
import Sun from '../img/sun.png'
import Moon from '../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../context'

function Darkmode() {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }

    return (
        <div className="dm">
            <img src={Sun} alt="" className="dm_icon" />
            <img src={Moon} alt="" className="dm_icon" />
            <div className="dm_button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Darkmode