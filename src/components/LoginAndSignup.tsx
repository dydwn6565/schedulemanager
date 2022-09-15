import React, { useState } from "react";
import {
  DivFlex,
  Icons,
  LoginButton,
  UserAuthContainer,
  UserAuthContainerOuline,
  UserAuthErrorDiv,
  UserAuthHeader,
  UserIDInput,
} from "../components/CssComponent";
import Header from "../components/Header";
import { FaRegUserCircle } from "react-icons/fa";
import { VscUnlock } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
interface ChildPropsType {
  userInput: string | undefined;
}

function LoginAndSignup({ userInput }: ChildPropsType) {
  const [userId, setUserId] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const userIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setUserId(event.target.value);
  };
  const userPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const submitHandler =()=>{
    console.log("hit submit")
    setUserIdError(false)
    setPasswordError(false)
    if (userId?.length !==undefined && userId?.length < 5) {
      setUserIdError(true);
    }
    if (password?.length !== undefined && password?.length < 5) {
      setPasswordError(true);
    }
    }
  return (
    <div>
      <Header />
      <UserAuthContainerOuline>
        <UserAuthContainer>
          <UserAuthHeader>{userInput}</UserAuthHeader>
          <DivFlex>
            <Icons>
              <FaRegUserCircle />
            </Icons>
            <UserIDInput type="text" onChange={userIdHandler} />
          </DivFlex>
            {userIdError && <UserAuthErrorDiv>Please type more than 5 character</UserAuthErrorDiv>}
          <DivFlex>
            <Icons>
              <VscUnlock />
            </Icons>
            <UserIDInput type="text" onChange={userPasswordHandler} />
          </DivFlex>
            {passwordError && <UserAuthErrorDiv>Please type more than 5 character</UserAuthErrorDiv>}
          <DivFlex>
            <Icons>
              <GrLogin />
            </Icons>
            <LoginButton onClick={submitHandler}>{userInput}</LoginButton>
          </DivFlex>
        </UserAuthContainer>
      </UserAuthContainerOuline>
    </div>
  );
}

export default LoginAndSignup;
