import React from "react";
import {
  DivFlex,
  Icons,
  LoginButton,
  UserAuthContainer,
  UserAuthContainerOuline,
  UserAuthHeader,
  UserIDInput,
  
} from "./components/CssComponent";
import Header from "./components/Header";
import { FaRegUserCircle } from "react-icons/fa";
import { VscUnlock } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import LoginAndSignup from "./components/LoginAndSignup";
function Login() {
   
  return (
    <div>
      {/* <Header />
      <UserAuthContainerOuline>
        <UserAuthContainer>
          <UserAuthHeader>User Login</UserAuthHeader>
          <DivFlex>
            <Icons>
              <FaRegUserCircle />
            </Icons>
            <UserIDInput type="text" />
          </DivFlex>
          <DivFlex>
            <Icons>
              <VscUnlock />
            </Icons>
            <UserIDInput type="text" />
          </DivFlex>
          <DivFlex>
            <Icons>
              <GrLogin />
            </Icons>
            <LoginButton>Login</LoginButton>
          </DivFlex>
        </UserAuthContainer>
      </UserAuthContainerOuline> */}
      <LoginAndSignup userInput={"Log in"}/>
    </div>
  );
}

export default Login;
