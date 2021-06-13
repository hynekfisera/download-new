import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Menu = () => {
  return (
    <div>
      <h3>Menu</h3>
      <Nav vertical>
        <NavItem>
          <NavLink href="/">Všechny soubory</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category/prg">Programování</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category/alg">Algoritmy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/category/other">Ostatní</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Menu;
