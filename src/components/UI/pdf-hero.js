import React from 'react';
import {ReactComponent as Square} from "../../images/square.svg";
import {ReactComponent as Zigzag} from "../../images/zigzag-blue.svg";
const PDFHero = (props) => {
    return (
        <div className="pdf-blog-hero">
            <div className="flex-container">
                <h1 className="page-title pdf-blog">{props.title}</h1>
                <div className="pdf-form-container">
                    <p className="copy-above-form">To receive a free downloadable version of this report, please register your details below.</p>
                    <div className="link-button" onClick={props.clicked}>Get the free report
                    </div>
                </div>
            </div>
            <Square className="blue-square" />
            <Zigzag className="yellow-zigzag" />
        </div>
    )
}

export default PDFHero;