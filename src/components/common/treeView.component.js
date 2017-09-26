import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
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
      // console.log(event);
      this.setState({
        selectedIndex: index
      });
      if(this.props.onChange){
        this.props.onChange(event, index);
      }
        
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
    defaultValue: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };
  return c;
}
SelectableList = wrapState(SelectableList);

/**
 * creates array of ListItem's JSX according to the tree data array
 */
function createListItemsJsx({data, textField, valueField, childrenField}) {
  if(!data) return [];
  let listItemsJSX= [];
  let i=1;
  for (const item of data){
    const childrenLength = item[childrenField] && 
      item[childrenField].length ? item[childrenField].length : 0;
      const value = valueField && item[valueField] ? item[valueField] : shortid.generate();
    listItemsJSX.push((
      <ListItem
        value = {value}
        key = {i++}
        primaryText= {item[textField]}
        nestedItems = {createListItemsJsx({
          data: item[childrenField],
          textField,
          valueField, 
          childrenField
        })}
        primaryTogglesNestedList = {true}
        // more stuff
      />
    ));
    // i = i + childrenLength +1;
  }
  return listItemsJSX;
}

const TreeView = ({data, textField, childrenField, valueField, onChange}) => {
  const defVal = data[0] && valueField ? data[0][valueField] : 1;
  return (
    <SelectableList onChange={onChange} defaultValue={defVal} >
      {createListItemsJsx({data, textField, valueField, childrenField})}
    </SelectableList>
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