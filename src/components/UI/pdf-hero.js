import React from 'react';
import LinkButton from './LinkButton';

const PDFHero = (title) => {

    return (
        <div className="pdf-blog-hero">
            <div className="flex-container">
                <h1 className="page-title pdf-blog">{title.title}</h1>
                <div className="pdf-form-container">
                    <p className="copy-above-form">To receive a free downloadable version of this report, please register your details below.</p>
                    <LinkButton>Get the free report</LinkButton>
                </div>
            </div>
        </div>
    )
}

export default PDFHero;