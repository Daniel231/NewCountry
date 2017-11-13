import React from 'react';
import PropTypes from 'prop-types';

const style = {
    display:'flex',
    flexFlow: 'column wrap'
}

const GridContainer = ({children, maxWidth, className}) => {
    const userStyle = maxWidth ? {maxWidth} : {};
    const mergedStyle = Object.assign({}, style, userStyle);
    return (
        <div className={className} style={mergedStyle}>{children}</div>
    );
}

export default GridContainer;