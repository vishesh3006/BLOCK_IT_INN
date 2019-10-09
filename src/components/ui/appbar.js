import React from 'react';
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
  DropdownItem } from 'reactstrap';

  import { firebase } from '../../firebase'

 export default class AppBar extends React.Component {
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

  handleLogout = (event) => {
      event.preventDefault()
      firebase.auth().signOut()
      .then(() => {
          console.log("user signOut")
          this.props.history.push("/")
      })
      .catch(err => {
          console.log(err)
      })
  }

  render() {
    return (
      <div>
        <Navbar color="transparent" light expand="md">
          <NavbarBrand href="/">BETA-TESTERS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-3 text-white" navbar style={{width:"100%"}}>
              <NavItem className="text-light">
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {!this.props.user ? 
              <NavItem className="ml-md-auto">
                <NavLink  href="/login">Login</NavLink>
              </NavItem> : null}
              {!this.props.user ? 
              <NavItem className="">
                <NavLink  href="">Signup</NavLink>
              </NavItem> : null }
              
              {this.props.user ? 
              <NavItem className=" ml-md-auto">
                <NavLink  href="" onClick={(event) => this.handleLogout(event)}>Signout</NavLink>
              </NavItem> : null }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}