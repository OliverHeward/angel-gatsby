import React from 'react'

const ProjectVideo = (project_group) => {
    console.log(project_group)

    return (
        <div className="project-video">
            <video className="silent-video" autoPlay playsInline muted loop>
            <source src={project_group.project_video.source_url}></source>
            </video>
            <p className="copy-under-image content-width">
            {project_group.project_text}
            </p>
        </div>
    )
}

export default ProjectVideo;