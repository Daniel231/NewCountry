import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Container from './styled/Container';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
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
    return (
      <div>
        <Container>
          {this.props.selectedGroup.name}
          <input
            type="text"
            value={this.state.filterText}
            onChange={this.onInputChange}
          />
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

