import React from 'react';
import PropTypes from 'prop-types';

const GridTile = ({grow, shrink, children, className}) => {
    const style = {
        display:'flex',
        flex: `${grow} ${shrink}`
    }
    return (
        <div className={className} style={style}>{children}</div>
    );
}

GridTile.defaultProps = {
    grow: 0,
    shrink: 1
};

export default GridTile;