import React from 'react';

const Output = (props) => {
    return (
        <div>
            <h3>Your cat is currently: {props.action}</h3>
        </div>
    )
};

export default Output;