import React from 'react';
import {Link} from 'gatsby';
// Add props for to url
const LinkButton = ({children, url}) => (
    <div className="link-button">
        <Link className="link" to={url}>{children}</Link>
    </div>
)

export default LinkButton;