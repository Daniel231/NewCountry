import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
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
      let leftIcon = undefined;
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
function createListItemsJsx(data, textField, valueField, childrenField) {
  if(!data) { 
    return [];
  }
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
        nestedItems = {createListItemsJsx(item[childrenField], textField, valueField, childrenField)}
        primaryTogglesNestedList = {true}
        insetChildren = {true}
        autoGenerateNestedIndicator={false}/>
    );
  });
}


// React compontent that creates the tree
class TreeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      defVal: 1
    };
  }

  // Before data is rendered on DOM make call to retrieve JSON data
  componentWillMount() {  
    // Sample url of JSON data
    fetch('https://gist.githubusercontent.com/yehudaNodeside/66b1e6dc9faac71e26c075a36e0ee01a/raw/71c3faa61b706ee59f119998d54b3cb2bf6827f8/newCountry.json')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        // Save the results in state
        this.setState({data: data});
        this.setState({defVal: this.state.data[0] && this.props.valueField ? this.state.data[0][this.props.valueField] : 1});
    }.bind(this));
  }

  render() {
    return (
      <div className={Classes.listBody}>
        <SelectableList onChange={this.props.onChange} defaultValue={this.state.defVal} 
            selectedItemStyle={Styles.selectedItem} >
          {createListItemsJsx(this.state.data, this.props.textField, this.props.valueField, this.props.childrenField)}
        </SelectableList>
      </div>
    );
  }
}

// Removed data from props
TreeView.defaultProps = {
  textField: "title",
  childrenField: "children"
};

TreeView.propTypes = {
  textField: PropTypes.string.isRequired,
  childrenField: PropTypes.string.isRequired,
  valueField: PropTypes.string,
  onChange: PropTypes.func
};

export default TreeView;