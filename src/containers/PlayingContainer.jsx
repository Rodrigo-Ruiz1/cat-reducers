import React from 'react';
import { connect } from 'react-redux';
import { actionPlaying } from '../actions';

const Playing = (props) => {
    return (
        <button onClick={props._handleClick}>Playing</button>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        _handleClick: () => {
            dispatch(actionPlaying());
        }
    }
}

export default connect(null, mapDispatchToProps)(Playing);