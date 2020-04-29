import React from 'react';
import {Link} from 'gatsby';
// Add props for to url
const LinkButton = ({children}) => (
    <div className="link-button">
        <Link className="link">{children}</Link>
    </div>
)

export default LinkButton;