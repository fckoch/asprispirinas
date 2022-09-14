
import { Link } from 'react-router-dom';
import './header.css';
import headerLogo from '../../assets/PRIPRI.gif';
import { useMatch } from "react-router-dom";
import {
  MenuOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const Header = () => {
  const isRootRoute = useMatch("/")?.pathname === "/";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-wrapper">
      <div className="go-back-wrapper">
        {!isRootRoute ? (
          <Link className="go-back" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="header-logo-wrapper">
        <img src={headerLogo} alt="logo" className='header-logo'/>
      </div>
      <div className="menu-wrapper">
        <MenuOutlined onClick={handleClick}></MenuOutlined>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/">Work</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/rusty-and-snowflake">Rusty and Snowflake</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/short-cute-comics">Short Cute Comics</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/a-carruagem">A Carruagem</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/homem-xx">Homem XX</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;