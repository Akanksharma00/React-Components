import React from 'react'
import {NavLink} from 'react-router-dom'
import { styled } from 'styled-components'

const SidebarWrapper = styled.div`
    height: 100vh;
    background-color: #ccc;
    overflow-y: auto;
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
        <h4><NavLink to="/">React Components</NavLink></h4>
        <form>
            <input type='text' placeholder='Search...'/>
        </form>
        <ul>
            <li><NavLink to="/accordian">Accordian</NavLink></li>
            <li><NavLink to="/button">Button</NavLink></li>
        </ul>
    </SidebarWrapper>
  )
}

export default Sidebar