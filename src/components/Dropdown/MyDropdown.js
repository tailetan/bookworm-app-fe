import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MyDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      title: this.props.title
    };
  }
  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeTitle(title) {
    this.setState((prevState) => ({
      title: title
    }));
  }

  render() {
    const { list } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.state.title}</DropdownToggle>
        <DropdownMenu container="body">
          {list.map((item, idx) => {
            return (
              <DropdownItem key={idx} onClick={() => this.changeTitle(item)}>
                {item}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default MyDropdown;
