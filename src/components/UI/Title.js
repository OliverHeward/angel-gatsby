import React from 'react';
import {ReactComponent as Zigzag} from "../../images/zigzag-blue.svg";

const Title = ({title, setSVG}) => {
    return (
    <div className="title-wrapper">
        <h1 className="title">{title}</h1>
        {(setSVG) ? <Zigzag className="blue-wotsit"/> : null}
    </div>
    );
}

export default Title;