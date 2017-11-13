import React from 'react';
import PropTypes from 'prop-types';

const GridTile = ({grow, shrink, basis, children, className}) => {
    const style = {
        display:'flex',
        flex: `${grow} ${shrink} ${basis}`
    }
    return (
        <div className={className} style={style}>{children}</div>
    );
}

GridTile.defaultProps = {
    grow: 0,
    shrink: 1,
    basis: '0%'
};

export default GridTile;