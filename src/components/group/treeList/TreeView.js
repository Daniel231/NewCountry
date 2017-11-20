import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import {ExpandLessIcon, ExpandMoreIcon, LeafIcon} from './icons';

import Styles from './styles';
import wrapState from './wrapState';
import MyListItem from './ListItem';

let SelectableList = makeSelectable(List);
SelectableList = wrapState(SelectableList);

/**
 * creates array of ListItem's JSX according to the tree data array
 */
function createListItemsJsx({data, textField, valueField, childrenField}) {
  if(!data) return [];
  return data.map((item, index) => {
    const value = valueField && item[valueField] ? item[valueField] 
    :shortid.generate();
    return (
      <MyListItem
        style = {Styles.listItem}
        expandLessIcon = {ExpandLessIcon}
        expandMoreIcon = {ExpandMoreIcon}
        leafIcon = {LeafIcon}
        nestedListStyle = {Styles.nestedList}
        value = {value}
        key = {index}
        primaryText= {item[textField]}
        nestedItems = {createListItemsJsx({
          data: item[childrenField],
          textField,
          valueField, 
          childrenField
        })}
        primaryTogglesNestedList
        insetChildren
        autoGenerateNestedIndicator={false}/>
    );
  });
}


const TreeView = ({data, textField, childrenField, valueField, onChange}) => {
  const defVal = data[0] && valueField ? data[0][valueField] : 1;
  return (
    // <div style={Styles.container}>
      <SelectableList style={Styles.container} onChange={onChange} defaultValue={defVal} 
          selectedItemStyle={Styles.selectedItem} >
        {createListItemsJsx({data, textField, valueField, childrenField})}
      </SelectableList>
    // </div>
  );
};

TreeView.defaultProps = {
  data: [],
  textField: "title",
  childrenField: "children"
};

TreeView.propTypes = {
  data: PropTypes.array.isRequired,
  textField: PropTypes.string.isRequired,
  childrenField: PropTypes.string.isRequired,
  valueField: PropTypes.string,
  onChange: PropTypes.func
};

export default TreeView;