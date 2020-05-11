import React from 'react';

const ContentBelowHero = ({title, content}) => (
    <div className="hero-content">
        <h1>{title}</h1>
        <p className="copy" dangerouslySetInnerHTML={{__html: content}} />
    </div>
)

export default ContentBelowHero;