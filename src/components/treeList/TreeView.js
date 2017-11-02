import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {List, ListItem, makeSelectable} from 'material-ui/List';

import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import GroupIcon from 'material-ui/svg-icons/social/group';
import IconButton from 'material-ui/IconButton';
import {black} from 'material-ui/styles/colors';

import Styles from './styles';
import wrapState from './wrapState';
import MyListItem from './ListItem';

let SelectableList = makeSelectable(List);
SelectableList = wrapState(SelectableList);


const styledExpandMore = <ExpandMoreIcon color={black}/>;
const styledExpandLess = <ExpandLessIcon color={black}/>;
const styledLeafIcon = <GroupIcon color={black}/>;


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
        expandLessIcon = {styledExpandLess}
        expandMoreIcon = {styledExpandMore}
        leafIcon = {styledLeafIcon}
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
        primaryTogglesNestedList = {true}
        insetChildren = {true}
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