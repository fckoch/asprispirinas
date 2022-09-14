import { NavLink } from "react-router-dom"
import sidebarLogo from '../../assets/4.gif';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={sidebarLogo} className="side-bar-image" alt="logo" />
      </div>
      <ul className="links-list">
        <NavLink end to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/rusty-and-snowflake">
          <li>Rusty and Snowflake</li>
        </NavLink>
        <NavLink to="/short-cute-comics">
          <li>Yukê</li>
        </NavLink>
        <NavLink to="/homem-xx">
          <li>Homem XX</li>
        </NavLink>
        <NavLink to="/a-gosma">
          <li>A GOSMA</li>
        </NavLink>
        <NavLink to="/a-carruagem">
          <li>VII A CARRUAGEM</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;