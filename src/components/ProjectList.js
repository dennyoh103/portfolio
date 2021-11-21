import React from 'react'
import './ProjectList.css'
import Project from './Project'

function ProjectList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire</h1>
                <p className="pl-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate reiciendis libero fugit orem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptate reiciendis libero fugit
                </p>
            </div>
            <div className="pl-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList
