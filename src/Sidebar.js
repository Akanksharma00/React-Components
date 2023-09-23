import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const SidebarWrapper = styled.div`
  height: 100vh;
  background-color: #ccc;
  overflow-y: auto;
`;

const LinksWrapper = styled.div`
  margin-top: 1em;
  max-height: 80vh;
  overflow-y: auto;
`;

const ListWrapper = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  text-align: left;
`;


const Sidebar = () => {
  return (
    <SidebarWrapper>
      <h4>
        <NavLink to="/">React Components</NavLink>
      </h4>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
      <LinksWrapper>
        <ListWrapper>
          <ListItem>
            <NavLink to="/accordian">Accordian</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/button">Button</NavLink>
          </ListItem>
        </ListWrapper>
      </LinksWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
