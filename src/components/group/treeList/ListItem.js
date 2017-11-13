import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import _ from 'lodash';


class MyListItem extends React.Component {
    constructor(props){
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }
    componentWillMount() {
        this.setState({
            open: this.props.initiallyOpen
        });
    }
    onToggle() {
        this.setState((prevState, props)=>({
            open: !prevState.open
        }));
    }
    render() {
        const {nestedItems, expandLessIcon, expandMoreIcon, 
            leafIcon, children, hasChildren} = this.props;
        let leftIcon = leafIcon;
        if(nestedItems && nestedItems.length || hasChildren) {
            leftIcon = this.state.open ? expandLessIcon : expandMoreIcon;
        }
        return (
            <ListItem 
                {..._.omit(this.props, 
                    ['expandLessIcon', 'expandMoreIcon', 'leafIcon', 'hasChildren'])}
                onNestedListToggle={this.onToggle}
                leftIcon = {leftIcon}
                >    
                {children}
            </ListItem>
        );
    }
}

MyListItem.propTypes = {
    expandLessIcon: PropTypes.node,
    expandMoreIcon: PropTypes.node,
    leafIcon: PropTypes.node,
    hasChildren: PropTypes.bool
}
MyListItem.muiName="ListItem";

export default MyListItem;