import React from 'react';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import GroupIcon from 'material-ui/svg-icons/social/group';
import {black} from 'material-ui/styles/colors';

const styledExpandMore = <ExpandMore color={black}/>;
const styledExpandLess = <ExpandLess color={black}/>;
const styledLeafIcon = <GroupIcon color={black}/>;

export const ExpandMoreIcon = styledExpandMore;
export const ExpandLessIcon = styledExpandLess;
export const LeafIcon = styledLeafIcon;