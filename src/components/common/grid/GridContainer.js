import React from 'react';
import PropTypes from 'prop-types';

const GridContainer = ({children}) => {
    const style = {
        display:'flex',
        flexFlow: 'column wrap'
    }
    return (
        <div style={style}>{children}</div>
    );
}

export default GridContainer;