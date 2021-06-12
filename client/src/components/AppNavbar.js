import React from "react";
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const AppNavbar = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">Download v2</NavbarBrand>
          <Nav className="ml-auto flex-row" navbar>
            <NavItem>
              <NavLink href="add">Add/Upload</NavLink>
            </NavItem>
            <NavItem style={{ marginLeft: "16px" }}>
              <NavLink href="https://github.com/hynekfisera/download-new">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
