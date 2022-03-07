import "./header.css";
import React from 'react';
import bookworm from "../../../assets/bookcovers/bookworm.png";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink , UncontrolledDropdown, DropdownToggle,
DropdownMenu, DropdownItem, NavbarText}from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faCartShopping, faHome,faShop, faCircleInfo,  } from '@fortawesome/free-solid-svg-icons'
export default class Header extends React.Component{
constructor(props) {
super(props);

this.toggle = this.toggle.bind(this);
this.state = {
isOpen: false
};
}
toggle() {
this.setState({
isOpen: !this.state.isOpen
});
}
render(){
return(

<div className="sticky-top">
    <Navbar color="light" light expand="md" className="sticky-top px-4">

        <NavbarBrand href="/">
            <img src={ bookworm } alt="Bookworm logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <div className="d-flex justify-content-end">
            <Collapse isOpen={this.state.isOpen} navbar>

                <Nav className="ml-auto " navbar>
                    <NavItem>
                        <NavLink href="/"> <FontAwesomeIcon icon={faHome} /> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/shop"> <FontAwesomeIcon icon={faShop} /> Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about"> <FontAwesomeIcon icon={faCircleInfo} /> About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart"> <FontAwesomeIcon icon={faCartShopping} /> Cart(0)</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sign in</NavLink>
                    </NavItem>

                </Nav>

            </Collapse>

        </div>
    </Navbar>
</div>
);
}
}

// export default Header;
// export default Header;
// export default Header;