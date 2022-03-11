import "./header.css";
import React from 'react';
import bookworm from "../../../assets/bookcovers/bookworm.png";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink , UncontrolledDropdown, DropdownToggle,
DropdownMenu, DropdownItem, NavbarText}from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faCartShopping, faHome,faShop, faCircleInfo,  } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
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

        <Link to="/">
            <img src={ bookworm } alt="Bookworm logo" />
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <div className="d-flex justify-content-end">
            <Collapse isOpen={this.state.isOpen} navbar>

                <Nav className="ml-auto " navbar>
                    <NavItem>
                        <Link to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/shop"> <FontAwesomeIcon icon={faShop} /> Shop</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"> <FontAwesomeIcon icon={faCircleInfo} /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> Cart(0)</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login">Sign in</Link>
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