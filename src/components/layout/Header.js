import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import Login from '../Login'
import "./Header.css";
import {openModal} from '../../action/modalAction'

const Header = () => {
  const dispatch = useDispatch()

const userLogin = useSelector(state => state.userLogin)
const {userInfo} = userLogin;

  const openModalHandler = () => {
    dispatch(openModal("open", <Login /> ))
  }
  return (
    <div className='header'>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
        className="header_logo"
        alt="logo"
      />

<div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
        <ExpandMoreIcon className="dropbtn" />
        <span onClick={openModalHandler}> Log in</span>
          <div className="dropdown-content">
            {userInfo ? (
          <>
          <span>Account</span>
          <span>Log out</span>
          </>
           ): ( 
          <>
          <span>Sign Up</span>
          <span onClick={openModalHandler}>Log in</span>
          <span>Help</span>
          </>
          )}
        
          </div>
        </div>
        {<span onClick={openModalHandler}>Log In</span>}
        <Avatar />
      </div>
    </div>
  );
};

export default Header