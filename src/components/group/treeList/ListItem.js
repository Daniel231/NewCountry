import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import _ from 'lodash';


class MyListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
  }
  componentWillMount() {
    this.setState({
      open: this.props.initiallyOpen,
    });
  }
  onToggle() {
    this.setState((prevState, props) => ({
      open: !prevState.open,
    }));
  }
  render() {
    const {
      nestedItems, expandLessIcon, expandMoreIcon,
      leafIcon, children, hasChildren, loading
    } = this.props;
    let leftIcon = leafIcon;
    const rightIcon = loading ? leafIcon : null;
    if(nestedItems && nestedItems.length || hasChildren) {
      leftIcon = this.state.open ? expandLessIcon : expandMoreIcon;
    }
    return (
      <ListItem
        {..._.omit(
          this.props,
          ['expandLessIcon', 'expandMoreIcon', 'leafIcon', 'hasChildren']
          )
        }
        onNestedListToggle={this.onToggle}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ListItem>
    );
  }
}


MyListItem.defaultProps = {
  expandLessIcon: null,
  expandMoreIcon: null,
  leafIcon: null,
  hasChildren: false,
  initiallyOpen: false,
  loading: false,
  nestedItems: [],
};

MyListItem.propTypes = {
  expandLessIcon: PropTypes.node,
  expandMoreIcon: PropTypes.node,
  leafIcon: PropTypes.node,
  hasChildren: PropTypes.bool,
  initiallyOpen: PropTypes.bool,
  loading: PropTypes.bool,
  nestedItems: PropTypes.arrayOf(PropTypes.node),
};
MyListItem.muiName = 'ListItem';

export default MyListItem;
