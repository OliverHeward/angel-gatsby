import React from 'react';

const PDFHero = (props) => {
    return (
        <div className="pdf-blog-hero">
            <div className="flex-container">
                <h1 className="page-title pdf-blog">{props.title}</h1>
                <div className="pdf-form-container">
                    <p className="copy-above-form">To receive a free downloadable version of this report, please register your details below.</p>
                    <div className="link-button">
                        <div className="link" onClick={props.clicked}>Get the free report</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PDFHero;