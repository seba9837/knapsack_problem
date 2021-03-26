import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./StandardNavBar.css";

const StandardNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md' className='StandardNavBar'>
        <Link to='/'>
          <NavbarBrand>Problem plecakowy</NavbarBrand>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <Link to='/Theory'>
              <NavItem>
                <NavLink>Teoria</NavLink>
              </NavItem>
            </Link>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Algorytmy
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/Dynamic'>
                  <NavLink>
                    <DropdownItem>Dynamiczny</DropdownItem>
                  </NavLink>
                </Link>

                <Link to='/Aproximation'>
                  <NavLink>
                    <DropdownItem>Aproksymacyjny</DropdownItem>
                  </NavLink>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default StandardNavBar;
