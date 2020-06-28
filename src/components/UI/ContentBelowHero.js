import React from 'react';

const ContentBelowHero = ({title, content, page}) => (
    <div className={`hero-content ${page} content-width`}>
        <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        <p className="copy" dangerouslySetInnerHTML={{__html: content}} />
    </div>
)

export default ContentBelowHero;