import React from 'react';

const List = () => {
    console.log();
    let test = 'method';
    return (
        <div className={`method-container ${test}`}>
            <h2>Strategy & Planning</h2>
            <ul>
                <li>- Ideation & Concept Creation</li>
                <li>- Campaign Planning</li>
                <li>- Activiation Management</li>
            </ul>
        </div>
    )
};

export default List;