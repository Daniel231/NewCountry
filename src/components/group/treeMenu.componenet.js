import React, {PropTypes} from 'react';
import {TreeList} from 'react-treeview-mui';
// import {MuiTreeList} from 'react-treeview-mui';

const TreeMenu =  ({itemsArray, expandedItems}) => {
    return (
        <TreeList
            listItems = {itemsArray}
            contentKey = {'title'}
            className="hebrew"
        />
    );
};

TreeMenu.propTypes = {
    itemsArray: PropTypes.array.isRequired
};

export default TreeMenu;