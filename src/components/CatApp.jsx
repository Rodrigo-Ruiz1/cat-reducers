import React from 'react';
import Output from '../containers/OutputContainer';
import Napping from '../containers/NappingContainer';
import Eating from '../containers/EatingContainer';
import Playing from '../containers/PlayingContainer';


const CatApp = (props) => {
    return (
        <div>
            <h1>Hi</h1>
            <Output />
            <Napping />
            <Eating />
            <Playing />
        </div>
    )
};

export default CatApp;