import React from 'react'
import './About.css'
import me from '../img/me portrait.jpeg'

function About() {
    return (
        <div className='about'>
            <div className="about_left">
                <div className="about_card bg"></div>
                <div className="about_card">
                    <img src={me} alt='me' className='about_img' />
                </div>
            </div>
            <div className="about_right">
                <h1 className="about_title">About Me</h1>
                <p className="about_sub">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, optio. 
                </p>
                <p className="about_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur maxime aperiam sapiente tempore accusamus dolorem, expedita minus veniam aliquid modi ipsa ducimus dolor fugiat officiis tempora nemo facere. Debitis?
                </p>
            </div>
        </div>
    )
}

export default About
