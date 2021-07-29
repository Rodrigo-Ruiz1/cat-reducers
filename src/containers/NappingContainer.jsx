import React from 'react';
import { connect } from 'react-redux';
import { actionNapping } from '../actions';

const Napping = (props) => {
    return (
        <button onClick={props._handleClick}>Napping</button>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        _handleClick: () => {
            dispatch(actionNapping());
        }
    }
}

export default connect(null, mapDispatchToProps)(Napping);