import React from 'react';
import PropTypes from 'prop-types';

const GridRow = ({rtl, wrap, justifyContent, children}) => {
    const style = {
        display:'flex',
        width:'100%',
        flexFlow: `row${rtl? '-reverse': ''} ${wrap? 'wrap': 'nowrap'}`,
        justifyContent: `${justifyContent}`
    };
    return (
        <div style={style}>{children}</div>
    );
};

GridRow.defaultProps = {
    rtl: false,
    wrap: false,
    justifyContent: 'flex-start'
};

export default GridRow;