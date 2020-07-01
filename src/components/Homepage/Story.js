import React, { useRef } from 'react';

import LinkButton from '../UI/LinkButton';
import { useOnScreen } from '../../shared/hooks/useOnScreen';

const Story = (about_angel) => {

    const ref = useRef();
    const onScreen = useOnScreen(ref, '0px', 0);
    // Destruct from props obj
    const {title, text, cta_text, mp4_file} = about_angel;
    return (
        <div className="story-container content-width">
            <img src={mp4_file.source_url} className="story_image" alt="" />
            <div className={`text-container ${onScreen ? 'fade-down' : ''}`} ref={ref}>
                <h1>{title}</h1>
                <p>{text}</p>
                <LinkButton url={`/about`}>{cta_text}</LinkButton>
            </div>
        </div>
    )
}

export default Story;