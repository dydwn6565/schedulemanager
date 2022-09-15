import {useState} from "react";

import LoginAndSignup from "./components/LoginAndSignup";
function Login() {
  const [noUserError, setnoUserError] = useState(false);
  const errorMessage = "Please check your userId and password";
    const logInhandler = (userId: string, password: string) => {

    };
  return (
    <div>
      <LoginAndSignup
        userInput={"Log in"}
        signUphandler={logInhandler}
        duplicateUserError={noUserError}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Login;
