import React from 'react'
import './ProjectList.css'
import Project from './Project'
import { projectData } from '../data'

function ProjectList() {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Personal Projects</h1>
                <p className="pl-desc">
                    These are some of my personal projects I worked on. They were mainly done for my own coding practices but they provide a sneak peek into the things I've been working on since I finished my coding bootcamp.
                </p>
            </div>
            <div className="pl-list">
                {/* {console.log({projectData})} */}
                {projectData.map(item => (
                    <Project key={item.id} img={item.img} link={item.url} github={item.github} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList
