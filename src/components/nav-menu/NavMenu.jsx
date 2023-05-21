import React from "react";
import { HeaderNav, NavLink,NavItem, NavList } from "../../pages/styled-components/StyledComponents";

const NavMenu = () => {
  return(
    <HeaderNav>
      <nav>
        <NavList>
          <NavItem>
            <NavLink to='/log-in'>Log in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/sign-up'>Sign up</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderNav>
  )
}
export default NavMenu;