import React from 'react'
import './Project.css'

const Project = ({ img, link, github }) => {
    return (
        <div className='project'>
            <div className='p'>
                <div className="p_browser">
                    <div className="p_circle"></div>
                    <div className="p_circle"></div>
                    <div className="p_circle"></div>
                </div>
                <a href={link} target='_blank' rel='noreferrer' className='image'>
                    <img src={process.env.PUBLIC_URL + img} alt="project screenshot" className='p_img' />
                    {console.log({ img })}
                </a>

            </div>
            <div className='github'>
                <a href={github}>github</a>
            </div>
        </div >
    )
}

export default Project
