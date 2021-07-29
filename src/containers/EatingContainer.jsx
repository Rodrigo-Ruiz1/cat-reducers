import React from 'react';
import { connect } from 'react-redux';
import { actionEating } from '../actions';

const Eating = (props) => {
    return (
        <button onClick={props._handleClick}>Eating</button>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        _handleClick: () => {
            dispatch(actionEating());
        }
    }
}

export default connect(null, mapDispatchToProps)(Eating);