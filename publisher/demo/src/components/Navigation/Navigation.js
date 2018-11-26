import React from 'react'
import { List, Nav, NavItem, NavLink } from './NavigationStyled'

const Navigation = () => (
  <Nav >
    <List>
      <NavItem>
        <NavLink to="/Page1/"
                 className="nav-link"
                 activeClassName="active">
          Tea
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/Page2/"
                 className="nav-link"
                 activeClassName="active">
          Travel
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/"
                 className="nav-link"
                 activeClassName="active">
          Veterinarian
        </NavLink>
      </NavItem>
    </List>
  </Nav>
);

export default Navigation
