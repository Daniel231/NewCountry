import React from 'react';
import PropTypes from 'prop-types';
import {List, makeSelectable} from 'material-ui/List';

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

  export default wrapState;