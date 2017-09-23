import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';

let SelectableList = makeSelectable(List);

/**
 * wraps states nessecary for selectable list 
 * onto the provided component
 */
function wrapState(ComposedComponent) {
  let c = class SelectableList extends React.Component {
    constructor(props){
      super(props);
      this.handleRequestChange = this.handleRequestChange.bind(this);
    }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue
      });
    }

    handleRequestChange (event, index) {
      console.log(event);
      this.setState({
        selectedIndex: index
      });
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
  c.propTypes = {
    children: PropTypes.node.isRequired,
    defaultValue: PropTypes.number.isRequired
  };
  return c;
}
SelectableList = wrapState(SelectableList);

/**
 * creates array of ListItem's JSX according to the tree data array
 */
function createListItemsJsx(data, textField, childrenField, uniqeIndex = 1) {
  if(!data) return [];
  let listItemsJSX= [];
  let i= uniqeIndex;
  for (const item of data){
    const childrenLength = item[childrenField] && 
      item[childrenField].length ? item[childrenField].length : 0;
    listItemsJSX.push((
      <ListItem
        value = {i}
        key = {i}
        primaryText= {item[textField]}
        nestedItems = {createListItemsJsx(item[childrenField],
          textField, childrenField, i+1)}
        primaryTogglesNestedList = {true}
        // more stuff
      />
    ));
    i = i + childrenLength +1;
  }
  return listItemsJSX;
}

function onChange(event, value){
  console.log(event);
  console.log("value:", value);
}

const TreeView = ({data, textField, childrenField}) => {
  return (
    <SelectableList onChange={onChange} defaultValue={1}>
      {createListItemsJsx(data, textField, childrenField)}
    </SelectableList>
  );
};

TreeView.propTypes = {
  data: PropTypes.array.isRequired,
  textField: PropTypes.string.isRequired,
  childrenField: PropTypes.string.isRequired
};

export default TreeView;