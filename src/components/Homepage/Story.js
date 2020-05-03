import React from 'react';

import LinkButton from '../UI/LinkButton';

const Story = (about_angel) => {
    // Destruct from props obj
    const {title, text, cta_text, mp4_file} = about_angel;
    return (
        <div className="story-container">
            <img src={mp4_file.source_url} className="story_image" />
            <div className="text-container">
                <h1>{title}</h1>
                <p>{text}</p>
                <LinkButton>{cta_text}</LinkButton>
            </div>
        </div>
    )
}

export default Story;