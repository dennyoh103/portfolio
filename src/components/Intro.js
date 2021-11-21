import React from 'react'
import me from '../img/me.jpeg'
import './Intro.css'

function Intro() {
    return (
        <div className='intro'>
            <div className='intro_left'>
                <div className="left_wrapper">
                    <h2 className="intro_intro">Hello, My name is</h2>
                    <h1 className="intro_name">Denny Oh</h1>
                    <div className="title">
                        <div className="title_wrapper">
                            <div className="title_item">Web Development</div>
                            <div className="title_item">Software Engineering</div>
                            <div className="title_item">UI/UX Design</div>
                            <div className="title_item">Process/Product Improvement</div>
                        </div>
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, et. Eos saepe nihil labore, aperiam consectetur vel numquam animi blanditiis dolorem commodi beatae ipsum dicta. Ab natus rem necessitatibus eveniet.
                    </p>
                </div>
            </div>
            <div className='intro_right'>
                <img src={me} alt='me' className='intro_photo' />
            </div>
        </div>
    )
}

export default Intro
