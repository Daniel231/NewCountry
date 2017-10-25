import React from 'react';
import PropTypes from 'prop-types';

const GridTile = ({grow, shrink,children}) => {
    const style = {
        display:'flex',
        flex: `${grow} ${shrink}`
    }
    return (
        <div style={style}>{children}</div>
    );
}

GridTile.defaultProps = {
    grow: 0,
    shrink: 1
};

export default GridTile;