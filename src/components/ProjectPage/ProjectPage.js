import React from 'react'
import './ProjectPage.css'

function ProjectPage(props) {
    return (
        <div className="projectPage" ref={el => {props.scrollRef.current[3] = el}}>
            <h1>Project</h1>
        </div>
    )
}

export default ProjectPage
