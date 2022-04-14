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
                    A recent web development bootcamp graduate and an aspiring software engineer.
                </p>
                <p className="about_desc">
                    I was a GIS analyst for the city of Seattle who was looking for more exciting challenges and faster moving enviornment. I joined Rover.com as a customer experience rep to experience to see what it's like to work in a tech company.
                    <br />
                    <br />
                    Working for startup tech companies was extremely fun and rewarding. I quickly joined the operations team. Operations was something new to me but I was constantly learning and enjoying the new role.
                    <br />
                    <br />
                    A few months after the pandemic started in 2020, however, I was furloughed from my latest job. During this period, I decided that I wanted to try something new and signed up for a web development bootcamp. After going through the bootcamp, I realized how fun yet, challenging coding was. I'm only a beginner and there is still a lot of things for me to learn going forward. But I'm very excited to continue developing as a software engineer!
                </p>
            </div>
        </div>
    )
}

export default About
