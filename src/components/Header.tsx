import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderDiv = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  padding:2vw;
`;

const NaviDiv = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  font-size:20px;
  color:black;
  cursor:pointer;
`;

function Header() {
  const logoutHandler=()=>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken");
  }
  return (
    <div>
      <HeaderDiv>
        <Link style={{ textDecoration: "none" }} to="/">
          <NaviDiv> Home</NaviDiv>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/date">
          <NaviDiv> Dates Schedule</NaviDiv>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/time">
          <NaviDiv>Time Schedule</NaviDiv>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/login">
          <NaviDiv>Login</NaviDiv>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <NaviDiv>Signup</NaviDiv>
        </Link>

        <NaviDiv onClick={logoutHandler}>Log out</NaviDiv>
      </HeaderDiv>
    </div>
  );
}

export default Header;
