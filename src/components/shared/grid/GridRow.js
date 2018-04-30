import React from 'react';
import PropTypes from 'prop-types';

const GridRow = ({
  rtl,
  wrap,
  justifyContent,
  className, 
  children 
}) => {
  const style = {
    display: 'flex',
    width: '100%',
    flexFlow: `row${rtl ? '-reverse' : ''} ${wrap ? 'wrap' : 'nowrap'}`,
    justifyContent: `${justifyContent}`,
  };
  return (
    <div className={className} style={style}>{children}</div>
  );
};

GridRow.defaultProps = {
  rtl: false,
  wrap: false,
  justifyContent: 'flex-start',
};

export default GridRow;
