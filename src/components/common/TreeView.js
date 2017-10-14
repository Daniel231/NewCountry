import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import GroupIcon from 'material-ui/svg-icons/social/group';
import IconButton from 'material-ui/IconButton';
import {black} from 'material-ui/styles/colors';
import {Classes, Styles} from '../../styles/sidemenu';


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
          style = {this.props.style}
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          selectedItemStyle={this.props.selectedItemStyle}
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

function extendListItem(ListItemComponent){
  let c = class MyListItem extends React.Component {
    constructor(props){
      super(props);
      this.listProps={};
      this.onToggle = this.onToggle.bind(this);
    }
    componentWillMount() {
      this.setState({
        open: this.props.initiallyOpen
      });
    }
    onToggle(){
      this.setState((prevState, props)=>({
        open: !prevState.open
      }));
    }
    render(){
      let leftIcon = <GroupIcon color={black}/>;
      if(this.props.nestedItems && this.props.nestedItems.length){
        leftIcon = this.state.open ? <ExpandLessIcon color={black}/> : 
          <ExpandMoreIcon color={black}/>;
      }
      return (
        <ListItemComponent 
          {...this.props}
          leftIcon ={leftIcon}
          onNestedListToggle={this.onToggle}
        >    
          {this.props.children}
        </ListItemComponent>
      );
    }
  };
  c.muiName="ListItem";
  return c;
}
let StateListItem = extendListItem(ListItem);

/**
 * creates array of ListItem's JSX according to the tree data array
 */
function createListItemsJsx({data, textField, valueField, childrenField}) {
  if(!data) return [];
  return data.map((item, index) => {
    const value = valueField && item[valueField] ? item[valueField] 
    :shortid.generate();
    return (
      <StateListItem
        style = {Styles.listItem}
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
    <div className={Classes.container}>
      <SelectableList style={{padding:0}} onChange={onChange} defaultValue={defVal} 
          selectedItemStyle={Styles.selectedItem} >
        {createListItemsJsx({data, textField, valueField, childrenField})}
      </SelectableList>
    </div>
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