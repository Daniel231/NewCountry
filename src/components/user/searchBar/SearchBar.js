import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Container from './styled/Container';
import GroupName from './styled/GroupName';
import GroupIcon from 'material-ui/svg-icons/social/group';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import ViewModuleIcon from 'material-ui/svg-icons/action/view-module';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const TABLE = 1
const GRID = 2

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      orderBy: 1,
    };
    this.handleOrderByChange = (event, index, value) => this.setState({orderBy: value});
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(e) {
    const text = e.target.value;
    this.props.filter(text);
    this.setState({
      filterText: text,
    });
  }
  render() {
    const {onChangeViewType} = this.props;
    return (
      <div>
        <Container
          style = {{marginTop: '10px', marginRight: '10px', justifyContent: "space-between"}} >
          <div style = {{display: 'flex'}}>
            <GroupIcon style = {{width: '30', height: '30',}} />
            <GroupName> {this.props.selectedGroup.name}</GroupName>
            <span style={{paddingTop: '6px'}}>(0)</span>
          </div>
          <div style = {{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
            <FilterInput
              type="text"
              placeholder="חפש שם"
              value={this.state.filterText}
              style = {{marginRight: '10px', height: '25px', width: '82%', minWidth: '200px'}}
              onChange={this.onInputChange}
            />
            <SearchIcon
              style = {{marginLeft: '-30px', padding: '2px',}}
            />
          </div>
          <div style = {{display: 'flex', flexGrow: '1', justifyContent: 'center'}} >
            <span style={{marginTop: '4px', marginLeft: '3px'}} >מיין לפי:</span>
            <SelectField
              style = {{marginTop: '-10px'}}
              value={this.state.value}
              onChange={this.handleOrderByChange}
              style={{width: 150, marginTop: '-10px'}}     
            >
              <MenuItem orderBy={1} primaryText="עובדים" />
              <MenuItem orderBy={2} primaryText="תפקידים" />
            </SelectField>
          </div>
          <div style={{ float: 'left', marginTop: '-10px', display: 'flex'}}>
            <IconButton onClick={onChangeViewType(TABLE)} tooltip="הצג רשימה">
              <ViewListIcon />
            </IconButton>
            <IconButton onClick={onChangeViewType(GRID)} tooltip="הצג גריד">
              <ViewModuleIcon />
            </IconButton>
          </div>
        </Container>
      </div>
    );
  }
}

export default inject(
  root => ({
    filter: root.store
      .selectedGroupStore.filter,
    selectedGroup: root.store.selectedGroupStore,
  })
)(observer(SearchBar));


// -------------------------------- Styles --------------------------------

const FilterInput = styled.input`
border-radius: 15px;
padding-right: 10px;
border-width: 1px;
width: 200px;
`;
